import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

//TODO make this component take in a query($path: String) or fragment
const Icon = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "icon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div
      style={{
        height: `50px`,
        width: `50px`,
      }}>
      <Img
        style={{ borderRadius: `50%` }}
        alt="icon commission by sleepypixieart"
        fluid={data.profile.childImageSharp.fluid}
      />
    </div>
  );
};

export default Icon;
