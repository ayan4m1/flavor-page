import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap';
import ReactCountryFlag from 'react-country-flag';

import Layout from '~components/Layout';
// import { VendorInfo } from '~components/VendorInfo';

export default function ListPage({ data }) {
  const vendors = data.vendors.nodes;
  const flavors = data.lists.flavors.map((flavor) => {
    const vendor = vendors.find((vend) => vend.code === flavor.vendorCode);

    return {
      ...flavor,
      vendor
    };
  });

  const { name, author } = data.lists;

  return (
    <Layout title={name}>
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
          <tr>
            <th>Vendor</th>
            <th>Flavor</th>
            <th>ATF Average %</th>
          </tr>
        </thead>
        <tbody>
          {flavors.map((flavor) => (
            <tr key={flavor.flavorName}>
              <td>
                {flavor.vendor ? (
                  <Fragment>
                    {flavor.vendor.country && (
                      <ReactCountryFlag
                        countryCode={flavor.vendor.country}
                        svg
                        style={{
                          fontSize: '2em',
                          lineHeight: '2em'
                        }}
                      />
                    )}{' '}
                    <span>
                      {flavor.vendor.url ? (
                        <a
                          href={flavor.vendor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {flavor.vendor.name}
                        </a>
                      ) : (
                        flavor.vendor.name
                      )}
                    </span>
                  </Fragment>
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
    lists: listsJson(code: { eq: $code }) {
      name
      author
      flavors {
        vendorCode
        flavorName
        atfAverage
      }
    }

    vendors: allVendorsJson {
      nodes {
        code
        country
        name
        url
      }
    }
  }
`;
