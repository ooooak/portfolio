import React from "react"
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
            <p>Work Primarily on SSR Frontend for MarketPlace using React/Nextjs</p>
            <p>Designed/Developed Rest API for MarketPlace</p>
            <p>Helped new developers to get started with the existing system</p>
            <p>Stack: React, Nextjs, Express, gatsbyjs, Nodejs, and MySQL</p>
            
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
            <p>Worked Primarily on Designing & Developing REST API</p>
            <p>Worked on Payment Gateway using Stripe and Braintree</p>
            <p>Worked on Single Page CRM using Angularjs</p>
            <p>Stack: PHP, Laravel, WordPress, Angularjs, MySQL</p>
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
            <p>Worked on multiple Tools that are listed</p>
            <p>Stack: PHP, CodeIgniter, knockoutjs, jQuery</p>
          </div>
        </div>
      </div>

      <div>
        
        <div>
        <hr/>
          Other clients

        </div>
        <p><a href="https://neue.co">neue.co</a></p>
        <p><a href="https://charsteakhouse.com/">charsteakhouse.com</a></p>
        <p><a href="https://industrym.com">industrym.com</a></p>
        <p><a href="https://j21ny.com/">j21ny.com</a></p>
        <p><a href="https://www.cambridgelakescharterschool.net">cambridgelakescharterschool</a></p>
        <p><a href="https://www.flairinteractive.com">flairinteractive</a></p>
      </div>
    </div>
  </Layout>
)

export default SecondPage
