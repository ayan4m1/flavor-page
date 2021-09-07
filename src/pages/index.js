import { formatDistanceToNow, parseISO, compareDesc } from 'date-fns';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Card, Col, Button } from 'react-bootstrap';

import Layout from '~components/Layout';

export default function IndexPage({ data }) {
  const lists = data.allListsJson.nodes;

  lists.sort((a, b) =>
    compareDesc(parseISO(a.dateAdded), parseISO(b.dateAdded))
  );

  return (
    <Layout title="Home">
      <div className="p-5 mb-4 bg-light rounded-3">
        <Container>
          <h1>The Flavor Page</h1>
          <h3>Because everyone loves a good list.</h3>
          <Link to="/lists">
            <Button variant="primary">View All &raquo;</Button>
          </Link>
        </Container>
      </div>
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
                  <Col md={4} className="d-grid gap-2">
                    <Link className="d-grid" to={`/${list.code}`}>
                      <Button variant="info">View &raquo;</Button>
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
