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
        <p>I'm a Full Stack Developer from India with 7+ years of experience. I have a strong background in PHP/Laravel, Node/Express and React/Nextjs. Interested FP, Clojure, Elixir/OTP and Software Architecture.</p>
        <br/>
      </div>
      <div className="social-media">
        <a href="mailto:akshay.deep0@gmail.com?Subject=Hi Akshay!!" target="_blank">Email</a>
        <span> / </span>
        <a title="Twitter" href="https://twitter.com/ooooak" target="_blank">Twitter</a>
        <span> / </span>
        <a title="Twitter" href="skype:akshay_deep0" target="_blank">Skype</a>
      </div>    
    </div>     
  </Layout>
)

export default IndexPage
