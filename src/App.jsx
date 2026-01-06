import { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent";
import EventCard from "./components/EventCard";
import eventsData from "./data/events";

function App() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setEvents(eventsData);
    }, 500);
  }, []);

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavbarComponent />

      {/* Hero Section */}
      <div className="hero-section text-center">
        <h1>Discover Events Near You</h1>
        <p>Find and register for exciting local events</p>
      </div>

      <Container className="my-4">
        {/* Search Bar */}
        <Form.Control
          type="text"
          placeholder="Search events by name..."
          className="mb-4"
          onChange={(e) => setSearch(e.target.value)}
        />

        <h2 className="text-center mb-4">Featured Events</h2>

        <Row>
          {filteredEvents.map(event => (
            <Col md={4} sm={6} xs={12} key={event.id} className="mb-4">
              <EventCard event={event} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
