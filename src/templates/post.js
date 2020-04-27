import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p>Author: {post.frontmatter.author}</p>
      <MDXRenderer>{post.body}</MDXRenderer>
      {/* <Link to="/">&larr; Back to Home</Link> */}
    </Layout>
  );
};

export default PostTemplate;
