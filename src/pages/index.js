import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      
    <div className="welcome">
      <div className="heading">
      Hi, I'm <span className="blue">Akshaydeep Giri</span>
      </div>

      <div className="description">
        <p>I'm a Self taught Full Stack Web Developer from india with 7+ years of experince. I have a strong background in HTML/CSS, Node, Ract, Express, PHP, Laravel and Wordpress. Currently learning Clojure, Elixir/OTP and Distributed System.</p>
      </div>
      <div className="social-media">
        <a href="mailto:akshay.deep0@gmail.com?Subject=Hi Akshay!!" target="_blank"> Email </a>
        <span> / </span>
        <a title="Twitter" href="https://twitter.com/ooooak" target="_blank">Twitter</a>
        <span> / </span>
        <a title="Sketch Together YouTubbe" href="https://www.youtube.com/channel/UCEUU9uh4GPA1KDweZ2mC8-w" target="_blank">YouTube</a> 
      </div>
    </div>     
  </Layout>
)

export default IndexPage
