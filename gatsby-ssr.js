import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import {MDXProvider} from "@mdx-js/react"
import {preToCodeBlock} from "mdx-utils"
import Theme from "./src/themes/theme"
import {Table, Code} from "./src/components"
import "./language-tabs.css"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: black;
    }
`

const components = {
    table: Table,
    pre: preProps => {
        const props = preToCodeBlock(preProps)
        // if there's a codeString and some props, we passed the test
        if (props) {
          return <Code {...props} />
        }
        // it's possible to have a pre without a code in it
        return <pre {...preProps} />
    },
    wrapper: ({ children }) => <>{children}</>,
}

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            {element}
        </ThemeProvider>
    </MDXProvider>
)
   
   
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it