import React from 'react'
import Form from '../components/form'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Layout from '../components/layout'
import theme from '../assets/themes/eftheme.js'

const IndexPage = () => (
  <MuiThemeProvider theme={theme}>
    <Layout>
      <Form />
    </Layout>
  </MuiThemeProvider>
)

export default IndexPage
