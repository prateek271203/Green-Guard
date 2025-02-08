import React from "react";
import { Container, Table } from "react-bootstrap";

const wasteData = [
  { id: 1, location: "City Center", fillLevel: "80%", status: "Pending" },
  { id: 2, location: "Residential Area", fillLevel: "45%", status: "Scheduled" },
  { id: 3, location: "Industrial Zone", fillLevel: "90%", status: "Urgent" },
  { id: 4, location: "School District", fillLevel: "60%", status: "Pending" },
  { id: 5, location: "Hospital Area", fillLevel: "75%", status: "Scheduled" },
  { id: 6, location: "Shopping Mall", fillLevel: "85%", status: "Pending" },
  { id: 7, location: "Park Area", fillLevel: "40%", status: "Collected" },
  { id: 8, location: "Highway Stop", fillLevel: "95%", status: "Urgent" },
  { id: 9, location: "Railway Station", fillLevel: "70%", status: "Scheduled" },
  { id: 10, location: "Airport Terminal", fillLevel: "50%", status: "Pending" },
];

const WasteTracker = () => {
  console.log("WasteTracker component loaded!"); // Debugging log

  return (
    <Container className="mt-4">
      <h3>Waste Management Status</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Location</th>
            <th>Bin Fill Level</th>
            <th>Collection Status</th>
          </tr>
        </thead>
        <tbody>
          {wasteData.map((item) => (
            <tr key={item.id}>
              <td>{item.location}</td>
              <td>{item.fillLevel}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default WasteTracker;
