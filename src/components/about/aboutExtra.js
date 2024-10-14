import React from "react"
import partner from "../../images/asp.jpeg"

const AboutExtra = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="mt-10 px-8">
      <h2 className="text-black text-4xl font-bold stylish-font">PRODUCTS AND SERVICES</h2>
        <p className="text-black opacity-90 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          SSGTLLC focus on distributing only the highest quality products as an exclusive distributor. We do this because we believe it ensure a long lasting, stable business relationship with our suppliers, while offering the best opportunity for our customers to become the leader in their market.
        </p>  
      <h2 className="mt-10 text-black text-4xl font-bold stylish-font">OUR PARTNERS</h2>
        <p className="text-black opacity-90 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Throughout our years of operations, we have built a strong relationship with many trustworthy partners.
        </p>

          <img alt="Image" className="max-h-36 w-full object-contain" src={partner}></img>
       
        <div className="mt-5 mb-5 sm:mt-8 sm:flex sm:justify-start lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple  hover:bg-transparent md:text-lg md:px-10 "
            >
              CONTACT US
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutExtra
