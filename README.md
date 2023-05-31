# Speakers

Speakers app built on React hooks. The app is based on [Using Hooks in React 18](https://app.pluralsight.com/library/courses/react-18-using-hooks/table-of-contents) Pluralsight course by [Peter Kellner](https://app.pluralsight.com/profile/author/peter-kellner). Course repo is located [here](https://github.com/pkellner/pluralsight-using-hooks-in-react18).

App uses the Next.js toolchain to build and run the app. It uses Next.js `wildcard route`, meaning that browsing to any URL on the site will cause `/pages/[[...route_name]].js` to execute. `getServerSideProps` is the only Next.js specific code in the entire app. All it does is pass props to the `index` component in this file - a variable `url` which is whatever user typed into the browser as URL path.

`index` component renders `App` component passing server side prop `url` into it. The `App` component in `/src/App.js` is the launching point of the app. If you want to use `CRA` or some other build chain, the only change you need to make is to call this `App` component from another toolchain - there’s no Next.js specific code under `/src` folder. To learn more visit [Node.js documentation](https://nextjs.org/docs/getting-started).

Project uses `npm`. To run the app navigate to the root of the app and open it with a code editor of your choice. Run once `npm install` and then `npm run dev` to launch the app.

App is deployed to GigHub Pages.
