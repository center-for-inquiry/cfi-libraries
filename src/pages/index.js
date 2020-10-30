import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import useHomePage from "../hooks/useHomePage";
import Banner from "../components/home-page/banner";
import HomeMap from "../components/home-page/home-map";
import BlogContainer from "../components/home-page/blog-container";
import HomeTitle from "../components/home-page/home-title";
import Gallery from "../components/home-page/gallery";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="blue-container">
      <div className="container" id="banner-container">
        <Banner main={useHomePage().homeACF.mainSection} image={useHomePage().homeACF.mainImage.sourceUrl} btnText={useHomePage().homeACF.searchButtonText} />
      </div>
      <div className="container" id="map-container">
        <HomeMap text={useHomePage().homeACF.mapInformation} contact={useHomePage().homeACF.simpleContactInfo} />
      </div>
      <div className="container" id="blog-container">
        <HomeTitle id="blogs-title" title="Blog Posts" />
        <BlogContainer />
      </div>
      <div className="container" id="gallery-container">
        <HomeTitle id="gallery-title" title={useHomePage().homeACF.galleryHeading} />
        <Gallery gal={useHomePage().homeACF.gallery} />
      </div>
    </div>
  </Layout>
)

export default IndexPage;
