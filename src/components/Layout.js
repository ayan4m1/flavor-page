import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';

import Header from '~components/Header';
import SEO from '~components/SEO';

export default function Layout({ children, title }) {
  return (
    <Fragment>
      <Header />
      <SEO title={title} />
      <Container>{children}</Container>
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};
