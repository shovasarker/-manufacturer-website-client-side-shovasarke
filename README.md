# Abacus Parts

### Live Website url: [https://abacus-parts.web.app/](https://abacus-parts.web.app/)

## Features and Functionality :

- This Project has 9 pages including NotFound Page.

  - Home
  - Parts
  - Blogs
  - MyPortFolio
  - DashBoard
  - Search
  - Login
  - Register
  - NotFound

- Every Page Has one Common Components

  - Header

- Home page has 7 unique sections or components

  - Banner
  - SearchBar
  - HomeParts
  - BusinessSummary
  - Popular
  - Reviews
  - Footer

- Parts has one Component

  - PartsContainer which is also common in HomeParts section and Items page

- Home page shows Banner and 3-cards in the Parts Section and 4 summary in the BusinessSummary Section and small info about Popular computer part in the Popular Section and 6 reviews shown in the reviews section.

- we can go to Purchase page by clicking place order button in the PartCard in HomeParts Section.
- Parts page shows all the Items in a grid
- Purchase Page Shows Details About a Particular part and also has an extra component for getting customer deatails for booking purpose. We can either apply for booking the part by clicking add to my order or by clicking pay now we can go to Payment page after booking is complete.
- Blogs page has Answer's of 6 question's.
- Login page is used to Login to website via firebase
- Register page is used to Register to website via firebase
- Login and Register both contains SocialLogin component which is used to sign in with google.
- Dashboard has total 9 nested Routes
  - MyProfile Route is Open for all user
  - User Routes
    - MyOrders
    - MyReviews
    - AddReview
    - Payment
  - Admin Routes
    - ManageOrders
    - ManageParts
    - MakeAdmin
    - AddPart

## List of **Libraries** use For this Project:

1. react-router-dom (for routing)
2. firebase (for authenticating and hosting)
3. react-firebase-hooks(for using firebase authentication easily)
4. react-icons (for using icons)
5. tailwindcss (framework for css)
6. postcss and autoprefixer
7. react-splide (for making crousel in the reviews section)
8. react-hook-form (for form validation)
9. react-toastify (for showing toast)
10. axios (for fetching data from the server)
11. react-query (for fetching asynchronous data)
12. react-rating (for making rating in the review section)
13. daisyui (for making components design)
14. date-fns (for formating date)
