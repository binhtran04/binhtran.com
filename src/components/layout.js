import React from 'react';
import { Global, css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from './mdx';

import { Header } from './header';
// import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
          /* More info: https://bit.ly/2PsCnzk */
          * + * {
            margin-top: 1rem;
          }
          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
              'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            font-size: 18px;
            line-height: 1.4;
            /* remove margin for the main div that Gatsby mounts into */
            > div {
              margin-top: 0;
            }
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;
            + * {
              margin-top: 0.5rem;
            }
          }
          strong {
            color: #222;
          }
          li {
            margin-top: 0.25rem;
          }
        `}
      />

      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        css={css`
          margin: 2rem auto;
          max-width: 680px;
        `}
      >
        {/* {children} */}
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </main>
      {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
    </>
  );
};

export default Layout;
