import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import Layout from '~components/Layout';

export default function ListsPage({ data }) {
  const lists = data.allListsJson.edges.map(({ node }) => node);

  return (
    <Layout title="Lists">
      <h1>The List of Lists</h1>
      <Table striped hover>
        <thead>
          <tr>
            <th>List Name</th>
            <th>Author</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((list) => (
            <tr key={list.code}>
              <td>
                <Link to={`/${list.code}`}>{list.name}</Link>
              </td>
              <td>
                <a
                  href={`https://reddit.com/u/${list.author}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {list.author}
                </a>
              </td>
              <td>{list.dateAdded}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  );
}

ListsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query {
    allListsJson {
      edges {
        node {
          name
          code
          author
          dateAdded
        }
      }
    }
  }
`;
