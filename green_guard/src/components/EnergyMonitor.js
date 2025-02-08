import React from "react";
import { Container, Card, ProgressBar } from "react-bootstrap";

const energyData = [
  { id: 1, device: "Air Conditioner", usage: 80 },
  { id: 2, device: "Refrigerator", usage: 45 },
  { id: 3, device: "Washing Machine", usage: 30 },
  { id: 4, device: "Heater", usage: 70 },
];

const EnergyMonitor = () => {
  return (
    <Container className="mt-4">
      {energyData.map((item) => (
        <Card key={item.id} className="mb-3 shadow-sm">
          <Card.Body>
            <Card.Title>{item.device}</Card.Title>
            <Card.Text>Current usage: {item.usage} kWh</Card.Text>
            <ProgressBar now={item.usage} label={`${item.usage} kWh`} />
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default EnergyMonitor;
