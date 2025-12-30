# PostHog post-wizard report

The wizard has completed a deep integration of your DevEvent Next.js project. PostHog has been configured for client-side analytics with automatic pageview tracking, exception capture, and custom event tracking for key user interactions. A reverse proxy has been set up to improve tracking reliability by routing PostHog requests through your Next.js server.

## Integration Summary

The following files were created or modified:

| File | Changes |
|------|---------|
| `.env` | Created with `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables |
| `instrumentation-client.ts` | Created to initialize PostHog client-side with error tracking and debug mode |
| `next.config.ts` | Added reverse proxy rewrites for `/ingest` to route through PostHog servers |
| `components/ExploreBtn.tsx` | Added `explore_events_clicked` event capture |
| `components/EventCard.tsx` | Added `event_card_clicked` event capture with event properties |
| `components/NavBar.tsx` | Added navigation click event captures for logo and all nav items |

## Events Instrumented

| Event Name | Description | File |
|------------|-------------|------|
| `explore_events_clicked` | User clicked the 'Explore Events' button on the homepage to scroll down to the events section | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicked on an event card to view event details, includes event title, slug, location, date, and time as properties | `components/EventCard.tsx` |
| `nav_home_clicked` | User clicked the Home link in the navigation bar | `components/NavBar.tsx` |
| `nav_events_clicked` | User clicked the Events link in the navigation bar | `components/NavBar.tsx` |
| `nav_create_event_clicked` | User clicked the Create Event link in the navigation bar - indicates interest in creating events | `components/NavBar.tsx` |
| `logo_clicked` | User clicked the logo in the navigation bar to return to homepage | `components/NavBar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://us.posthog.com/project/275370/dashboard/958889) - Your main dashboard with all key metrics

### Insights
- [Event Card Clicks Over Time](https://us.posthog.com/project/275370/insights/X6JPGk3x) - Track how many users are clicking on event cards
- [Explore Events Button Clicks](https://us.posthog.com/project/275370/insights/UQQlD1gi) - Track engagement with the Explore Events CTA
- [Navigation Engagement](https://us.posthog.com/project/275370/insights/dNSwOqKj) - Track clicks on navigation items
- [Homepage to Event View Funnel](https://us.posthog.com/project/275370/insights/vUNYuifd) - Conversion funnel from exploring to clicking events
- [Top Events by Clicks](https://us.posthog.com/project/275370/insights/Pe1UARoh) - See which events are most popular

## Additional Features Enabled

- **Automatic Pageview Tracking**: PostHog will automatically capture pageviews as users navigate
- **Exception Capture**: Unhandled JavaScript errors will be captured and sent to PostHog
- **Session Recording**: Available in your PostHog dashboard (may require additional configuration)
- **Reverse Proxy**: Requests are routed through `/ingest` to improve tracking reliability
