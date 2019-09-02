import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout title="Contact">
    <SEO title="Contact" />
      <dl class="contact-list">
        <dt>Email: &nbsp;&nbsp; </dt>
        <dd><a href="mailto:mail@mail.com">akshay.deep0@gmail.com</a></dd>
        <dt>Skype:  &nbsp;&nbsp; </dt>
        <dd><a href="skype:akshay_deep0">akshay_deep0</a></dd>
        <dt>Twitter: &nbsp;&nbsp; </dt>
        <dd><a href="https://twitter.com/ooooak">@ooooak</a></dd>
      </dl>      
  </Layout>
)

export default Contact
