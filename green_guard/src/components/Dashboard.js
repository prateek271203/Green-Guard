import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AQIChart from "./AQIChart";
import MapComponent from "./MapComponent";
import Notification from "./Notification";
import CarbonFootprint from "./CarbonFootprint";

const initialData = [
  { id: 1, type: "Air Quality", city: "Delhi", aqi: 87, status: "Moderate" },
  { id: 2, type: "Air Quality", city: "Mumbai", aqi: 42, status: "Good" },
  { id: 3, type: "Renewable Energy", source: "Solar", efficiency: "High", location: "Rajasthan" },
  { id: 4, type: "Waste Management", city: "Bangalore", recyclingRate: "65%", landfillReduction: "30%" },
];

const Dashboard = () => {
  const [environmentalData, setEnvironmentalData] = useState(initialData);

  // Simulate real-time AQI updates every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setEnvironmentalData((prevData) =>
        prevData.map((data) =>
          data.type === "Air Quality"
            ? { ...data, aqi: Math.floor(Math.random() * 150) + 50 }
            : data
        )
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Environmental Monitoring Dashboard</h2>
      <Row>
        {environmentalData.map((data) => (
          <Col md={4} key={data.id} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{data.type}</Card.Title>
                {data.type === "Air Quality" && (
                  <Card.Text>
                    City: {data.city} <br />
                    AQI: {data.aqi} <br />
                    Status: {data.aqi > 100 ? "Unhealthy" : "Moderate"}
                  </Card.Text>
                )}
                {data.type === "Renewable Energy" && (
                  <Card.Text>
                    Source: {data.source} <br />
                    Efficiency: {data.efficiency} <br />
                    Location: {data.location}
                  </Card.Text>
                )}
                {data.type === "Waste Management" && (
                  <Card.Text>
                    City: {data.city} <br />
                    Recycling Rate: {data.recyclingRate} <br />
                    Landfill Reduction: {data.landfillReduction}
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* AQI Chart */}
      <Row className="mt-4">
        <Col>
          <h3 className="text-center">AQI Trend</h3>
          <AQIChart data={environmentalData} />
        </Col>
      </Row>
      <Notification data={environmentalData} />

      <Row className="mt-4">
        <Col>
          <CarbonFootprint />
        </Col>
      </Row>

      {/* Map Component */}
      <Row className="mt-4">
        <Col>
          <h3 className="text-center">Air Quality Monitoring Map</h3>
          <MapComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
