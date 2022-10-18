import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <h1>HELLO from the third page</h1>
  </Layout>
)

export const Head = () => <Seo title="Page three" />

export default ThirdPage
