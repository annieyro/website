import React from 'react';
import { Link } from 'gatsby';
import { TitleSerif, CaptionSansSerif } from '../styled/global';
import {
  WhiteBGCenteredContainer,
  HeadingContainer,
  PostsContainer,
} from '../styled/global';
import SidebarLayout from '../components/sidebarlayout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image';

// TODO install gatsby-plugin-typegen to help w/ graphQL types until then ignore :sweat-smile:

const AmigurumiPage = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/pages/amigurumi/" } }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <SidebarLayout>
      <SEO title="amigurumi" />
      <WhiteBGCenteredContainer>
        <HeadingContainer>
          <TitleSerif>amigurumi</TitleSerif>
          <CaptionSansSerif>crochet creatures</CaptionSansSerif>
        </HeadingContainer>
        <PostsContainer>
          {data.allMdx.edges.map(({ node }) => {
            const featuredImgFluid =
              node.frontmatter.featuredImage.childImageSharp.fluid;
            return (
              <div style={{ width: `24%`, padding: `2%` }} key={node.id}>
                <Link to={node.fields.slug} style={{ textDecoration: `none` }}>
                  <div></div>
                  <Img
                    fluid={featuredImgFluid}
                    alt={`${node.frontmatter.title} amigurumi, taken with portrait mode on iphone`}
                  />

                  <p>
                    {node.frontmatter.title} • {node.frontmatter.date}
                  </p>
                </Link>
              </div>
            );
          })}
        </PostsContainer>
        <CaptionSansSerif style={{ marginBottom: `16px` }}>
          {data.allMdx.totalCount} posts
        </CaptionSansSerif>
      </WhiteBGCenteredContainer>
    </SidebarLayout>
  );
};

export default AmigurumiPage;
