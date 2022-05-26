import React from 'react'

const Blogs = () => {
  return (
    <main className='container px-6 md:px-10 lg:px-16 xl:px-20 my-10'>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 xl:gap-20'>
        <div className='p-5 rounded-lg shadow-xl text-neutral space-y-3'>
          <h2 className='text-2xl text-semibold'>
            1. How will you improve the performance of a React Application?
          </h2>
          <p>
            There Are Several Ways to Improve performance of React App like :
          </p>
          <ul className='list-outside list-disc ml-4 font-semibold'>
            <li>Keeping component state local where necessary</li>
            <li>
              Memoizing React components to prevent unnecessary re-renders
            </li>
            <li>Code-splitting in React using dynamic import()</li>
            <li>Windowing or list virtualization in React</li>
            <li>Lazy loading images in React</li>
          </ul>
        </div>
        <div className='p-5 rounded-lg shadow-xl text-neutral space-y-3'>
          <h2 className='text-2xl text-semibold'>
            2. What are the different ways to manage a state in a React
            application?
          </h2>
          <p>There are different ways to manage state in react like :</p>
          <ul className='list-outside list-disc ml-4 font-semibold'>
            <li>Using useState hooks for Managing local state</li>
            <li>Using Context api for managing global state </li>
            <li>Using Redux Store for managing global state </li>
            <li>
              Using React Query for Managing local state and syncrous fetching
            </li>
          </ul>
        </div>
        <div className='p-5 rounded-lg shadow-xl text-neutral space-y-3'>
          <h2 className='text-2xl text-semibold'>
            3. How does prototypical inheritance work?
          </h2>
          <p>
            Prototypical inheritance refers to the ability to access object
            properties from another object. We use a JavaScript prototype to add
            new properties and methods to an existing object constructor. We can
            then essentially tell our JS code to inherit properties from a
            prototype. Prototypical inheritance allows us to reuse the
            properties or methods from one JavaScript object to another through
            a reference pointer function.
          </p>
        </div>
        <div className='p-5 rounded-lg shadow-xl text-neutral space-y-3'>
          <h2 className='text-2xl text-semibold'>
            4. Why you do not set the state directly in React. For example, if
            you have const [products, setProducts] = useState([]). Why you do
            not set products = [...] instead, you use the setProducts
          </h2>
          <p>
            React re-render occurs if a reference of a state is changed. We know
            that state in react are immutable , it means that if we want to
            change it's value we must provide it with a new reference or else
            react will not trigger a re-render. So if directly assign a value to
            the state we actualy mutating the state, that means the value is
            Changed but the Reference Didn't changed. So we use the dispatch
            method (setState) to setting a value of a state, so that we don't
            mutate the state unknowingly.
          </p>
        </div>
        <div className='p-5 rounded-lg shadow-xl text-neutral space-y-3'>
          <h2 className='text-2xl text-semibold'>
            5. What is a unit test? Why should write unit tests?
          </h2>
          <p>
            Unit testing is a type of software testing where individual units or
            software components are tested. Its purpose is to validate that each
            unit of code performs as expected. A unit can be anything you want
            it to be-a line of code, a method, or a class.
          </p>
          <p>The Reasons we need to write unit tests are : </p>
          <ul className='list-outside list-disc ml-4 font-semibold'>
            <li>Unit tests save time and money.</li>
            <li>Well-written unit tests act as documentation for your code.</li>
            <li>It simplifies the debugging process.</li>
            <li>Unit tests make code reuse easier. </li>
          </ul>
        </div>
        <div className='p-5 rounded-lg shadow-xl text-neutral space-y-3'>
          <h2 className='text-2xl text-semibold'>
            6. You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h2>
          <p>
            If i have an array of products and each array contains name, price,
            description etc, then to search the array with it's name i would use
            Array.filter() method to filter out the products array to see if any
            product has the same name. filter() methods always returns an array
            and i would use string includes() method in the comparison so that
            if the name is a partial match of a product we can filter it out.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Blogs
