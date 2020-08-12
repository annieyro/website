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

const PhotoJournalPage = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/mdx/photo-journal/" } }) {
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
      <SEO title="photo journal" />
      <WhiteBGCenteredContainer>
        <HeadingContainer lineNum={3}>
          <TitleSerif style={{ marginBottom: `4px` }}>photo journal</TitleSerif>
          <hr style={{ width: `78%` }}></hr>
          <CaptionSansSerif>
            documenting some memories. <br></br> shot on canon eos80d | 50mm
            f1.8 | kit 18-135mm; iphone x
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
          {data.allMdx.totalCount} entries
        </CaptionSansSerif>
      </WhiteBGCenteredContainer>
    </SidebarLayout>
  );
};

export default PhotoJournalPage;
