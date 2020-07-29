import React from 'react';
import { Link } from 'gatsby';
import { PageCenterContainer } from '../styled/global';
import SidebarLayout from '../components/sidebarlayout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';

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

  console.log(data);
  return (
    <SidebarLayout>
      <SEO title="amigurumi" />
      <PageCenterContainer>
        <h1>amigurumi</h1>
        <h4>{data.allMdx.totalCount} Posts</h4>
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} style={{ textDecoration: `none` }}>
              <h3>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
        <p>welcome to page 2</p>
        <Link to="/">go back to the homepage</Link>
      </PageCenterContainer>
    </SidebarLayout>
  );
};

export default AmigurumiPage;
