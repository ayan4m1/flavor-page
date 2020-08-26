import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Table } from 'react-bootstrap';

import Layout from '~components/Layout';

export default function ListPage({ data }) {
  const vendors = data.allVendorsCsv.nodes;
  const flavors = data.listsJson.flavors.map((flavor) => {
    const vendor = vendors.find((vend) => vend.code === flavor.vendorCode);

    return {
      ...flavor,
      vendor
    };
  });

  const { name, author } = data.listsJson;

  return (
    <Layout>
      <h1>{name}</h1>
      <h3>
        by{' '}
        <a
          href={`https://reddit.com/u/${author}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {author}
        </a>
      </h3>
      <Table striped hover>
        <thead>
          <th>Vendor</th>
          <th>Flavor</th>
          <th>ATF Average %</th>
        </thead>
        <tbody>
          {flavors.map((flavor) => (
            <tr key={flavor.flavorName}>
              <td>
                {flavor.vendor ? (
                  <a
                    href={flavor.vendor?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {flavor.vendor?.name}
                  </a>
                ) : (
                  flavor.vendorCode
                )}
              </td>
              <td>{flavor.flavorName}</td>
              <td>{flavor.atfAverage}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  );
}

ListPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query($code: String) {
    listsJson(code: { eq: $code }) {
      name
      author
      flavors {
        vendorCode
        flavorName
        atfAverage
      }
    }

    allVendorsCsv {
      nodes {
        code
        name
        url
      }
    }
  }
`;
