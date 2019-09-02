import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


const CV = () => (
  <Layout title="CV / Work">
    <SEO title="CV / Work" />
    <div className="experiences">
      <div className="experience">
        <div className="title">
          <span className="role blue">Self Employed</span>
          <br/>
          <span className="date">Nov 2017 – Jan 2019</span>
        </div>
      </div>

      <div className="experience">
        <div className="title">
          <span className="role blue">Senior Full Stack Engineer</span>
          <span className="company blue"> - Bulbtech.io</span>
          <br/>
          <span className="date">Nov 2017 – Jan 2019</span>
        </div>    
        <div className="description">
        <p>Work Primarily on SSR Frontend for MarketPlace using Nextjs/React</p>
        <p>Designed/Developed Rest API for MarketPlace</p>
        <p>Helped new developers to get started with the existing system</p>
        </div>
        <div className="stack">
          Technologies Used: React, Nextjs, Express, gatsbyjs, Nodejs, and MySQL 
        </div>
      </div>

      <div className="experience">
      <div className="title">
          <span className="role blue">Senior Full Stack Engineer</span>
          <span className="company blue"> - Fixdrepair</span>
          <br/>
          <span className="date">Apr 2015 – Nov 2017</span>
        </div>
        
        <div className="description">
          <p>Worked Primarily on Designing/Developing REST API</p>
          <p>Implemented payment gateway using Stripe and Braintree</p>
          <p>Develop SPA CRM using Angularjs</p>
        </div>
        <div className="stack">
          Technologies used: PHP, Laravel, WordPress, Angularjs, MySQL
        </div>
      </div>

      <div className="experience">
        <div className="title">
          <span className="role blue">Full Stack Engineer</span>
          <span className="company blue"> - AG Soft</span>
          <br/>
          <span className="date">Feb 2012 – Present</span>
        </div>
        <div className="description">
          <p>Worked with multiple clients Including </p>
          <p><a href="http://educonnected.com/">Educonnected</a></p>
          <p><a href="http://www.emrpcc.org.au/">Emrpcc</a></p>
          <p><a href="https://flairinteractive.com">Flairinteractive</a></p>
        </div>
        <div className="stack">
          Technologies Used: PHP, Laravel, CodeIgniter, Yii, Wordpress, JS, jQuery
        </div>
      </div>
    </div>
  </Layout>
)

export default CV