This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone the repository, then run;

```bash
npm install
```

to install all project dependancies.

Because the project is still under development, you will have to initialise a json server at localhost:8000 to serve the dummy data on root/data/db.json.

Json-server is an npm package that emulates a REST API by serving the top level elements of a json file as REST resources allowing us to perform simple CRUD operations on it, you can read more about it [here](https://www.npmjs.com/package/json-server)

You can initialise json-server at localhost:8000 like so;

```bash
npx json-server --watch data/db.json --port 8000
```

Now you can run the nextjs project on the browser by running

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
