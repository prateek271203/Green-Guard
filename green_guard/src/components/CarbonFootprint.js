import React, { useState, useEffect } from "react";
import { Container, Card, ProgressBar } from "react-bootstrap";

const initialCarbonData = [
  { id: 1, activity: "Transport", emissions: 120, unit: "kg CO₂" },
  { id: 2, activity: "Electricity Usage", emissions: 200, unit: "kg CO₂" },
  { id: 3, activity: "Industrial Waste", emissions: 350, unit: "kg CO₂" },
];

const CarbonFootprint = () => {
  const [carbonData, setCarbonData] = useState(initialCarbonData);

  // Simulate dynamic updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCarbonData((prevData) =>
        prevData.map((item) => ({
          ...item,
          emissions: item.emissions + Math.floor(Math.random() * 10),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="mt-4">
      <h3 className="text-center">Carbon Footprint Tracker</h3>
      {carbonData.map((data) => (
        <Card key={data.id} className="mb-3 shadow-sm">
          <Card.Body>
            <Card.Title>{data.activity}</Card.Title>
            <Card.Text>Emissions: {data.emissions} {data.unit}</Card.Text>
            <ProgressBar now={data.emissions / 5} label={`${data.emissions} ${data.unit}`} />
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default CarbonFootprint;