# ecommerce-react-strapi

*Disclaimer: The whole project has been implemented following the [YouTube tutorial by Ed Roh](https://www.youtube.com/watch?v=EBCdyQ_HFMo). Thanks, Ed, for the experience and fun.*

## Intro
This is a simple e-shop learning project divided in two parts - backend leveraging Strapi headless CMS and frontend implemented in React using popular libraries:
* React Router (SPA routing)
* React Redux (state management)
* MaterialUI + Icons (Design system components)
* Formik (Checkout form)
* Yup (Form validation)
* Stripe (Payment gateway mock)

The goal of the project has been to deliver some (close to) real project, get familiar with an approach of an experienced React developer and also the libraries mentioned above.

## Run project
First you must have an Stripe account to integrate the payment gateway. Search and replace <INSERT_STRIPE_SECRET_KEY> and <INSERT_STRIPE_PUBLIC_KEY> with the respective values from your account.

Run backend
```shell
cd backend
npm run develop
```

Run frontend
```shell
cd frontend
npm run start
```

See Strapi CMS at http://localhost:1337
See the application at http://localhost:3000