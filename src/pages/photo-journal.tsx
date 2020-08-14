import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import SEO from '../components/seo';
import SidebarLayout from '../components/sidebarlayout';
import {
  CaptionSansSerif,
  HeadingContainer,
  ContentContainer,
  PostCard,
  PostsContainer,
  TitleSerif,
  LayoutStyle,
  WhiteBGCenteredContainer,
} from '../styled/global';

// TODO install gatsby-plugin-typegen to help w/ graphQL types until then ignore :sweat-smile:

const PhotoJournalPage = ({
  location,
}: {
  location: Location;
}): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/photo-journal/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
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

  const numEntries = data.allMarkdownRemark.totalCount;

  return (
    <SidebarLayout location={location}>
      <>
        <LayoutStyle />
        <SEO title="photo journal" />
        <WhiteBGCenteredContainer>
          <ContentContainer>
            <HeadingContainer lineNum={3}>
              <TitleSerif style={{ marginBottom: `4px` }}>
                photo journal
              </TitleSerif>
              <hr style={{ width: `78%` }}></hr>
              <CaptionSansSerif>
                documenting some memories. <br></br> shot on canon eos80d • 50mm
                f1.8 • kit 18-135mm | (sometimes) iphone x
              </CaptionSansSerif>
            </HeadingContainer>

            <PostsContainer>
              {data.allMarkdownRemark.edges.map(({ node }) => {
                const featuredImgFluid =
                  node.frontmatter.featuredImage.childImageSharp.fluid;
                return (
                  <PostCard key={node.id}>
                    <Link
                      to={node.fields.slug}
                      style={{ textDecoration: `none` }}>
                      <div></div>
                      <Img
                        fluid={featuredImgFluid}
                        alt={node.frontmatter.alt}
                      />

                      <p>
                        {node.frontmatter.title} • {node.frontmatter.date}
                      </p>
                    </Link>
                  </PostCard>
                );
              })}
            </PostsContainer>
          </ContentContainer>
          <CaptionSansSerif
            style={{
              paddingBottom: `24px`,
            }}>
            {numEntries} {numEntries > 1 ? 'entries' : 'entry'}
          </CaptionSansSerif>
        </WhiteBGCenteredContainer>
      </>
    </SidebarLayout>
  );
};

export default PhotoJournalPage;
