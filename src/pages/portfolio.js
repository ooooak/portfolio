import React from "react"
// import { graphql } from "gatsby"

// import bulb from  "../images/sites/bulb.jpg"
// import fixd from  "../images/sites/fixd.jpg"
// import neue from  "../images/sites/neue.co.jpg"
// import immi from  "../images/sites/immi.jpg"
// import industrym from  "../images/sites/industrym.jpg"
// import flair from  "../images/sites/flairinteractive.jpg"
// import cambridge from  "../images/sites/cambridgelakescharterschool.jpg"
// import charsteak from  "../images/sites/charsteakhous.jpg"
// import j21ny from  "../images/sites/j21ny.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout title="Portfolio">
    <SEO title="Portfolio" />
    <div className="portfolio">
      <div className="row">
        <div className="col-md-6 thumb">
          <img src="https://i.imgur.com/8ymblSZ.jpg" alt="alt" className="img-responsive"/>
        </div>
        <div className="col-md-6">
          <div className="pj-description">
            <h4>
              <a href="https://bulbtech.io/" target="_blank">Bulbtech</a>
            </h4>
            <p>The Bulb Marketplace is a community driven platform connecting brands with sellers and sellers with customers.</p>
          </div>        
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 thumb">
          <img src="https://i.imgur.com/xaRpQT4.jpg" alt="alt" className="img-responsive"/>
        </div>
        <div className="col-md-6">
          <div className="pj-description">
            <h4>
              <a href="https://www.fixdrepair.com/" target="_blank">Fixdrepair</a>
            </h4>
            <p>Frustration-Free Living - Complete home repair coverage performed by in-house Fixd Technicians.</p>
          </div>        
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 thumb">
          <img src="https://i.imgur.com/YS5oi2g.jpg" alt="alt" className="img-responsive"/>
        </div>
        <div className="col-md-6">
          <div className="pj-description">
            <h4>
              <a href="https://neue.co" target="_blank">Neue</a>
            </h4>
            <p>
            Neue, a lighting company that wants to challenge the convention; a lighting company that wants to collaborate, rather than compete; a lighting company that thinks differently about how the world interacts today in the built environment.
            </p>
       
          </div>        
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 thumb">
          <img src="https://i.imgur.com/frn7PBk.jpg" alt="alt" className="img-responsive"/>
        </div>
        <div className="col-md-6">
          <div className="pj-description">
            <h4>
              <a href="https://charsteakhouse.com/" target="_blank">Charsteakhouse</a>
            </h4>
            <p>CHAR STEAKHOUSE is a New York style steakhouse with two locations in Central Jersey.  Our innovative cuisine features only the finest cuts of dry-aged, prime beef with fish delivered fresh daily. Guests will dine by landscaped views revealed by towering windows. </p>
          </div>        
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 thumb">
          <img src="https://i.imgur.com/vQfBE4c.jpg" alt="alt" className="img-responsive"/>
        </div>
        <div className="col-md-6">
          <div className="pj-description">
            <h4>
              <a href="https://industrym.com" target="_blank">Industrym</a>
            </h4>
            <p>INDUSTRY Magazine is an upscale glossy print magazine, digital publication, and other media firm that brings to life the fashion, entertainment, and luxury lifestyle for tastemakers and trendsetters.</p>
          </div>        
        </div>
      </div>

      
      <div className="row">
        <div className="col-md-6 thumb">
          <img src="https://i.imgur.com/4VSYv5b.jpg" alt="alt" className="img-responsive"/>
        </div>
        <div className="col-md-6">
          <div className="pj-description">
            <h4>
              <a href="https://www.flairinteractive.com/" target="_blank">flairinteractive</a>
            </h4>
            <p>
            Flair Interactive is a Chicago Hubspot agency specializing in content strategy and growth-driven web site design.
            </p>
          </div>        
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 thumb">
          <img src="https://i.imgur.com/w332qoz.jpg" alt="alt" className="img-responsive"/>
        </div>
        <div className="col-md-6">
          <div className="pj-description">
            <h4>
              <a href="https://www.cambridgelakescharterschool.net/" target="_blank">
                Cambridge Lakes Charter School
              </a>
            </h4>
            <p>Cambridge Lakes Charter School (CLCS) opened its doors in September 2007 with 484 students and has been growing ever since. CLCS is currently made up of four small color-coded schools and is located on the campus of the Cambridge Lakes Learning Center in the growing town of Pingree Grove, IL.</p>
          </div>        
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 thumb">
          <img src="https://i.imgur.com/iiw0gac.jpg" alt="alt" className="img-responsive"/>
        </div>
        <div className="col-md-6">
          <div className="pj-description">
            <h4>
              <a href="https://j21ny.com/" target="_blank">J21ny</a>
            </h4>
            <p>Jupiter 21 (J21): Luxury Lower East Side Apartments | 21 East 1st Street</p>
          </div>        
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 thumb">
          <img src="https://i.imgur.com/T4Il4qm.jpg" alt="alt" className="img-responsive"/>
        </div>
        <div className="col-md-6">
          <div className="pj-description">
            <h4>
              <a href="https://www.immigroup.com/tools-and-widgets" target="_blank">Immigroup</a>
            </h4>
            <p>IMMIgroup is a Canadian immigration consulting firm located in Toronto, ON. Since we opened in 2004, our mission has been to provide friendly, accessible, understandable legal service of the highest quality for matters concerning immigration and travel. </p>
          </div>        
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
