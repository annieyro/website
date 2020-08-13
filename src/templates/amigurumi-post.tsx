import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import React from 'react';
import {
  WhiteBGCenteredContainer,
  BodyContainer,
  HeadingContainer,
  TitleSerif,
} from '../styled/global';

import SidebarLayout from '../components/sidebarlayout';

const AmigurumiPost = ({ data }): JSX.Element => {
  console.log(data.markdownRemark.frontmatter);
  const post = data.markdownRemark;
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <SidebarLayout>
      <WhiteBGCenteredContainer>
        <HeadingContainer marginTop="32px" lineNum={0}>
          <TitleSerif fontWeight={'500'} style={{ marginBottom: `12px` }}>
            {post.frontmatter.title}
          </TitleSerif>
          <hr style={{ width: `75%` }}></hr>
        </HeadingContainer>
        <div style={{ width: `60%`, maxWidth: `300px` }}>
          <Img fluid={featuredImgFluid} alt={`${post.frontmatter.alt}`} />
        </div>
        <BodyContainer>
          <section dangerouslySetInnerHTML={{ __html: post.html }}></section>
        </BodyContainer>

        {/* invisible margin lol */}
        <div style={{ height: `30vh`, display: `block`, color: `white` }}>
          hello!
        </div>
      </WhiteBGCenteredContainer>
    </SidebarLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        alt
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default AmigurumiPost;
