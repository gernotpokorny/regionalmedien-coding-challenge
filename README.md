This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Development

First, install the dependencies:

```bash
npm i
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production

https://regionalmedien-coding-challenge.vercel.app/

With this link you can access this Weather App for example directly from your phone or tablet.

## Tests

The Tests can be run via `npm run test`.

## Remarks

### General

The Coding Challenge description demands daily or hourly (I assume 1 hour) forecasts, but this is not possible with the free tier of the `openwheatermaps.com` API.

Quote from the Coding Challenge description:

> The widget should be swipeable to get to the forecasts (either per day or per hour)

Quote from the `openwheatermaps.com` API Pricing Free Tier (as can be seen [here][1]):

> Free: Current Weather, 3-hour Forecast 5 days

That's why I implemented the 3-hour forecast.

Furthermore the icons provided by `openwheatermaps.com` are only available in a very small size and that's why enlarging them looks quite bad.

[1]: https://openweathermap.org/price

### Dynamic routes

#### `[slideId]`

This route was implemented in order to make specific daily forecasts directly accessible via this dynamic url. Unfortunately I found out later (as mentioned above), that the free tier doesn't support daily forecasts. You can still use this route to access specific slides directly. For example if there's a forecast available for the "Wednesday, 15th February 2023 at 21:00:00", then it can be accessed via `<url>/2023-02-15-21-00-00`.