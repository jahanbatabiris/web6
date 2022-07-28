import React from 'react'
import {
    createTheme ,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles'
import { faIR } from '@material-ui/core/locale'
import CssBaseline from '@material-ui/core/CssBaseline'

let theme = createTheme (
  {
   
    // direction: 'rtl',
    // breakpoints: {
    //     values: {
    //       xs: 0,
    //       sm: 600,
    //       md:960,
    //       lg: 1280,
    //       xl: 1920,
    //     },
    //   },
  },
  faIR
)
theme = responsiveFontSizes(theme)

export default function MUI(props) {
  return (
    <>
      {/* <StylesProvider> */}
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {
          props.children
        }
      </ThemeProvider>
    </>
  )
}