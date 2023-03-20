# Regionalmedien Coding Challenge

## Introduction

Create a small, responsive weather web app based on the free API from openweathermap.

The web app should only consist of a weather-widget and should be optimized for mobile devices.
We do not need a Header, Footer or other flavoured stuff around the weather-widget.
The whole application can be limited to one location.

Must‘s for the technology:
- Use a react based technology
- Implement a SSR based solution
- Provide us the solution in a git repo (gitlab, github, bitbucket)

## Minimum functional requirements

1. Display everything in metric units
2. Display the location
3. Display the min temperature
4. Display the max temperature
5. Display the “feels like“ temperature
6. Display the date and time when the weather infos were tracked
7. Display the belonging weather icon
8. The widget should be swipeable to get to the forecasts (either per day or per hour)

## Optional functional requirements

1. Display the amount of rain in the last few hours
2. Display the windspeed in km/h
3. Display the wind gust
4. Display the humidity in %

## How do we test the project

1. Functional testing:
We will check out the provided git project and based on the projects documentation we will build/run it.
We will open it in several different local browsers an have a look at the result
2. Run tests
Based on the projects documentation we will run the tests and have a look at the output.
3. Technical review
We will review based on the used technology:
- Filestructure
- Structure of the tests
- Code quality based on common metrics
- Used frameworks and libraries
- Architecture of the we-app itself

---

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