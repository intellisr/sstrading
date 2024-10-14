import React from "react"
import AboutTeamCard from "./aboutTeamCard"

import img1 from "../../images/popular-2.png"
import img2 from "../../images/hed-min.jpg"
import img3 from "../../images/hed-min.jpg"

const AboutGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
      <AboutTeamCard
        imgSrc="https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        position="Efficiency And Discipline"
        text="International trade is all about timing. SSGTLLC guarantees the most efficient and professional business process with our years of experience in import and export"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://images.pexels.com/photos/17808943/pexels-photo-17808943/free-photo-of-tropical-palms-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        position="Options that suits you and your business"
        text="Using our strong connections with suppliers and freight forward, we are able to provide you with more choices and opportunities when you work with us"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://images.pexels.com/photos/4869080/pexels-photo-4869080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        position="Your success is our success"
        text="Our goal with every customer is always a stable, long- term business relationship. We will provide you with the support before, during and well after you order, because we understand our customer’s needs."
      ></AboutTeamCard>
    </div>
  )
}

export default AboutGrid
