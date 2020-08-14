import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import SidebarLayout from '../components/sidebarlayout';
import {
  BodyContainer,
  HeadingContainer,
  TitleSerif,
  WhiteBGCenteredContainer,
} from '../styled/global';
import { PostStyle } from '../styled/global';
import SEO from '../components/seo';

const AmigurumiPost = ({
  data,
  location,
}: {
  location: Location;
}): JSX.Element => {
  const post = data.markdownRemark;
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <SidebarLayout location={location}>
      <>
        <PostStyle />
        <SEO title={post.frontmatter.title} />
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
        </WhiteBGCenteredContainer>
      </>
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
