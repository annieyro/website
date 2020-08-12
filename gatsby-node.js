/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    console.log(node);
    const slug = createFilePath({ node, getNode, basePath: `src/md` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    throw result.errors;
  }

  const amigurumiTemplate = path.resolve('./src/templates/amigurumi-post.tsx');
  // const photoJournalTemplate = path.resolve(`./src/templates/photojournal-post.tsx`);
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: amigurumiTemplate,
      context: {
        // Data passed to context is available
        // in page (ex: amigurumiTemplate) queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};
