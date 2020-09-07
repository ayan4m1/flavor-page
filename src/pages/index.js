import { formatDistanceToNow, parseISO, compareDesc } from 'date-fns';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Jumbotron, Row, Card, Col, Button } from 'react-bootstrap';

import Layout from '~components/Layout';
import { graphql } from 'gatsby';

export default function IndexPage({ data }) {
  const lists = data.allListsJson.nodes;

  lists.sort((a, b) =>
    compareDesc(parseISO(a.dateAdded), parseISO(b.dateAdded))
  );

  return (
    <Layout title="Home">
      <Jumbotron variant="info">
        <Container>
          <h1>The Flavor Page</h1>
          <h3>Because everyone loves a good list.</h3>
          <Link to="/lists">
            <Button variant="primary">View All &raquo;</Button>
          </Link>
        </Container>
      </Jumbotron>
      <h4>New Lists</h4>
      {lists.map((list) => (
        <Row key={list.code} className="mb-2">
          <Col>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={8}>
                    <h5>
                      {list.name} - {list.flavors.length} flavors
                    </h5>
                    <p>
                      Added{' '}
                      {formatDistanceToNow(parseISO(list.dateAdded), {
                        addSuffix: true
                      })}
                    </p>
                  </Col>
                  <Col md={4} className="button-container">
                    <Link to={`/${list.code}`}>
                      <Button block variant="info">
                        View &raquo;
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query {
    allListsJson {
      nodes {
        name
        code
        dateAdded
        flavors {
          flavorName
        }
      }
    }
  }
`;
