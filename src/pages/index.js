import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
// import FeaturedBlog from "../components/FeaturedBlog"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Seo
        title="Sithranjan Saranath General Trading L.L.C"
        description="At Sithranjan Saranath General Trading L.L.C, we specialize in exporting fresh, high-quality fruits and vegetables from Sri Lanka to the United Arab Emirates. Our mission is to deliver the rich flavors of Sri Lankan produce to the Middle East, ensuring freshness and satisfaction for all our clients."
      ></Seo>
      <Header></Header>
      <FeatureSection></FeatureSection>
      <Testimonial></Testimonial>
    </Layout>
  </div>
)

export default IndexPage
