import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import SEO from '../components/seo';
import SidebarLayout from '../components/sidebarlayout';
import { CaptionSansSerif, TitleSerif } from '../styled/global';
import {
  HeadingContainer,
  PostCard,
  PostsContainer,
  WhiteBGCenteredContainer,
} from '../styled/global';

// TODO install gatsby-plugin-typegen to help w/ graphQL types until then ignore :sweat-smile:

const AmigurumiPage = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/mdx/amigurumi/" } }) {
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
              alt
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
        <HeadingContainer lineNum={1}>
          <TitleSerif style={{ marginBottom: `4px` }}>amigurumi</TitleSerif>
          <hr style={{ width: `75%` }}></hr>
          <CaptionSansSerif style={{ textAlign: `center` }}>
            crochet creatures
          </CaptionSansSerif>
        </HeadingContainer>

        <PostsContainer>
          {data.allMdx.edges.map(({ node }) => {
            const featuredImgFluid =
              node.frontmatter.featuredImage.childImageSharp.fluid;
            return (
              <PostCard key={node.id}>
                <Link to={node.fields.slug} style={{ textDecoration: `none` }}>
                  <div></div>
                  <Img fluid={featuredImgFluid} alt={node.frontmatter.alt} />

                  <p>
                    {node.frontmatter.title} • {node.frontmatter.date}
                  </p>
                </Link>
              </PostCard>
            );
          })}
        </PostsContainer>
        <CaptionSansSerif style={{ textAlign: `center`, marginBottom: `20px` }}>
          {data.allMdx.totalCount} posts
        </CaptionSansSerif>
      </WhiteBGCenteredContainer>
    </SidebarLayout>
  );
};

export default AmigurumiPage;
