import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      allListsJson {
        nodes {
          code
          name
        }
      }
    }
  `);

  return (
    <Navbar variant="primary" className="mb-4">
      <Navbar.Brand>
        <Nav.Item as={Link} to="/">
          The Flavor Page
        </Nav.Item>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          {data.allListsJson.nodes.map((node) => (
            <Nav.Link as={Link} key={node.code} to={`/${node.code}`}>
              {node.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
