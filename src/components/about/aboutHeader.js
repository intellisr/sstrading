import React from "react"
import Fade from "react-reveal/Fade"

import Image3 from "../../images/hed-min.jpg"

const AboutHeader = () => {
  return (
    <Fade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl max-h-96 m-4">
          <img alt="Image" src={Image3}></img>
        </div>
        <div className="mt-10 px-8">
          <h1 className="font-bold text-2xl text-black text-gradient bg-gradient-to-r from-pink to-purple stylish-font">
            What is Sithranjan Saranath General Trading L.L.C?
          </h1>
          <p className="text-black opacity-90 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
            SSGTLLC - Sithranjan Saranath General Trading L.L.C Company is registered under the U.A.E law with the number 1123539 and are based at Fruit & Veg. Market, Al Aweer, Dubai - U.A.E.
          </p>
          <p className="text-black opacity-90 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
            Founded in 12/2/2019, SSGTLLC was created with the goal to be a reliable partner in international trading. With over 5 years of experience in both imports and exports. SSGTLLC focused on bringing high quality, exclusive products from Sri Lanka to distributors all over the world, especially in U.A.E market and vice versa.
          </p>
          <p className="text-black opacity-90 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
            We now have distribution channels in all three all they are regions of U.A.E and exclusive distributor partners in the food and beverage industry.
          </p>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader
