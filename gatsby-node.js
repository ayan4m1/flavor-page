const { resolve } = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allListsJson {
        nodes {
          code
        }
      }
    }
  `);
  const component = resolve(`src/pages/list.js`);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  result.data.allListsJson.nodes.forEach((node) => {
    const path = `/${node.code}`;

    reporter.info(`Created page for ${path}`);
    createPage({
      context: node,
      component,
      path
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~components': resolve(__dirname, 'src/components'),
        '~pages': resolve(__dirname, 'src/pages'),
        '~utils': resolve(__dirname, 'src/utils')
      }
    }
  });
};
