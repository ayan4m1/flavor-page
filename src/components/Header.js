import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container, Navbar, Nav } from 'react-bootstrap';

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
    <Navbar bg="light" expand="lg" variant="primary" className="mb-4">
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">
            The Flavor Page
          </Nav.Link>
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
      </Container>
    </Navbar>
  );
}
