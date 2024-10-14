import React from "react"
import Gallery from "../components/gallery-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <Layout>
      <Seo
        title="Sithranjan Saranath General Trading L.L.C"
        description="At Sithranjan Saranath General Trading L.L.C, we specialize in exporting fresh, high-quality fruits and vegetables from Sri Lanka to the United Arab Emirates. Our mission is to deliver the rich flavors of Sri Lankan produce to the Middle East, ensuring freshness and satisfaction for all our clients."
      ></Seo>
      <Gallery></Gallery>
    </Layout>
  )
}

export default GalleryPage
