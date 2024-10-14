import React from "react"
import AboutPage from "../components/about/aboutPage"

import AboutGrid from "../components/about/aboutGrid"
import Seo from "../components/seo"

import Layout from "../components/layout"
import AboutExtra from "../components/about/aboutExtra"
import AboutHeader from "../components/about/aboutHeader"

const About = () => {
  return (
    <Layout>
      <Seo
        title="Sithranjan Saranath General Trading L.L.C"
        description="At Sithranjan Saranath General Trading L.L.C, we specialize in exporting fresh, high-quality fruits and vegetables from Sri Lanka to the United Arab Emirates. Our mission is to deliver the rich flavors of Sri Lankan produce to the Middle East, ensuring freshness and satisfaction for all our clients."
      ></Seo>
      <AboutHeader></AboutHeader>
      <AboutPage></AboutPage>
      <AboutGrid></AboutGrid>
      <AboutExtra></AboutExtra>
    </Layout>
  )
}

export default About
