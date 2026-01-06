import { Card, Button } from "react-bootstrap";

const EventCard = ({ event }) => {
  return (
    <Card className="shadow-sm h-100">
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>
          <strong>Date:</strong> {event.date}<br />
          <strong>Location:</strong> {event.location}
        </Card.Text>
        <Card.Text>{event.description}</Card.Text>
        <Button variant="dark">Register</Button>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
