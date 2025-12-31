import mongoose from "mongoose";

// Define the connection cache type

type MongooseCache = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
};

//Extend the global object to include our mongoose cache
declare global {
    // eslint-disable-next-line no-var
    var mongoose: MongooseCache | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;

//Validate MONGODB_URI exists
if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined.");
}

// Initialize the cache on the global object to persist across hot reloads in development
let cached: MongooseCache = global.mongoose || {conn: null, promise: null};

if (!global.mongoose) {
    global.mongoose = cached;
}

/** Establishes a connection to MongoDB using Mongoose
 * Caches the connection to prevent multiple connections during development hot reloads
 * @returns Promise resolving to the Mongoose instance
 */

async function connectDB(): Promise<typeof mongoose> {
    // Return existing connection if available
    if (cached.conn) {
        return cached.conn;
    }
    // Returning existing connection promise if one is in progress
    if (!cached.promise) {
        const options = {
            bufferCommands: false, // Disable mongoose buffering
        }
        // Create a new connection promise if one doesn't exist yet
        cached.promise = mongoose.connect(MONGODB_URI!, options).then((m) => {
            return m;
        })
    }
    try {
        // Wait for the connection to establish
        cached.conn = await cached.promise;
    } catch (error) {
        // Reset promise on error to allow retry
        cached.promise = null;
        throw error;
    }
    return cached.conn;
}

export default connectDB;

