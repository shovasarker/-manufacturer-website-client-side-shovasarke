import React from 'react'

const MyPortFolio = () => {
  return (
    <main className='container px-6 md:px-10 lg:px-16 xl:px-20'>
      <div className='w-full md:max-w-md lg:max-w-lg mx-auto rounded-lg shadow-xl my-10 p-6 space-y-4'>
        <h2 className='text-3xl font-semibold'>My PortFolio</h2>
        <h3 className='text-2xl'>
          Name: <span className='font-semibold'>Shova Sarker</span>
        </h3>

        <p className='text-base'>
          Email: <span className='font-semibold'>shovasarker01@gmail.com</span>
        </p>
        <p className='text-base'>
          Educational Background:{' '}
          <span className='font-semibold'>
            HSC Passed in 2015 from Comilla Board, Currently Studying BSC in
            RUET
          </span>
        </p>
        <p>Technologies : </p>
        <ul className='list-outside list-disc ml-4 font-semibold'>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>C</li>
          <li>C++</li>
          <li>Java</li>
          <li>Node Js</li>
        </ul>

        <p>FrameWorks or Libraries : </p>
        <ul className='list-outside list-disc ml-4 font-semibold'>
          <li>Tailwind CSS</li>
          <li>Bootstrap CSS</li>
          <li>React Js</li>
          <li>Express Js</li>
        </ul>

        <p>Three Projects links: </p>
        <ul className='list-outside list-disc ml-4 font-semibold'>
          <li>
            <a
              href='https://personal-movie-info-site.netlify.app/'
              target={'_blank'}
              rel='noreferrer'
            >
              https://personal-movie-info-site.netlify.app/
            </a>
          </li>
          <li>
            <a
              href='https://shovasarker.github.io/personal-clothing-shop'
              target={'_blank'}
              rel='noreferrer'
            >
              https://shovasarker.github.io/personal-clothing-shop
            </a>
          </li>
          <li>
            <a
              href='https://find-countries-by-shova.netlify.app/'
              target={'_blank'}
              rel='noreferrer'
            >
              https://find-countries-by-shova.netlify.app/
            </a>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default MyPortFolio
