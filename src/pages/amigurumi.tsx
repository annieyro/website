import React from 'react';
import { Link } from 'gatsby';
import {
  ColumnContainer,
  TitleSerif,
  CaptionSansSerif,
  RowContainer,
} from '../styled/global';
import { WhiteBGCenteredContainer } from '../styled/amigurumi';
import SidebarLayout from '../components/sidebarlayout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image';

// TODO install gatsby-plugin-typegen to help w/ graphQL types
// until then ignore :sweat-smile:

const AmigurumiPage = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
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
            excerpt
          }
        }
      }
    }
  `);

  return (
    <SidebarLayout>
      <SEO title="amigurumi" />
      <ColumnContainer
        style={{
          margin: `0 auto`,
          background: `white`,
          // hacky way to get the white to fill-right
          marginLeft: `4%`,
          marginBottom: `12%`,
          width: `130%`,
          justifyContent: `flex-start`,
          alignItems: `center`,
        }}>
        <ColumnContainer
          style={{
            width: `70%`,
            height: `18vh`,
            marginBottom: `5%`,
            justifyContent: `space-evenly`,
            alignItems: `center`,
          }}>
          <TitleSerif>amigurumi</TitleSerif>
          <CaptionSansSerif>crochet creatures</CaptionSansSerif>
        </ColumnContainer>
        <RowContainer
          style={{
            width: `80%`,
            flexWrap: `wrap`,
            justifyContent: `space-evenly`,
            alignItems: `flex-start`,
          }}>
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
        </RowContainer>
        <CaptionSansSerif style={{ marginBottom: `16px` }}>
          {data.allMdx.totalCount} posts
        </CaptionSansSerif>
      </ColumnContainer>
    </SidebarLayout>
  );
};

export default AmigurumiPage;
