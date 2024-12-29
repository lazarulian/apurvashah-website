# Apurva Shah - Portfolio

<img width="1465" alt="image" src="https://github.com/user-attachments/assets/d3b3f872-30e3-49f8-883b-20ef6a595072" />



## Development Instructions

First, setup and run the development server. 

```bash
pnpm install

pnpm run dev
```

Keep in mind, the development server will not run if you do not have the correct environment variables set up. Here is an example of how to setup your environment variables. 

```env
# .env

LITERAL_USER_PASSWORD="PASSWORD"
LITERAL_USER_EMAIL="EMAIL_ADDRESS"
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

Open PRs will always be deployed on vercel and will have preview links to debug on. To test your deployment before actually deploying, go ahead and run the following and look out for build errors. 

```bash
pnpm run build
```
