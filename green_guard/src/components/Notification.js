import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

const Notification = ({ data }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const newAlerts = data
      .filter((item) => item.type === "Air Quality" && item.aqi > 100)
      .map((item) => `⚠️ High AQI Alert in ${item.city}! AQI: ${item.aqi} (Unhealthy)`);

    setAlerts(newAlerts);
  }, [data]);

  return (
    <div>
      {alerts.map((alert, index) => (
        <Alert key={index} variant="danger" className="text-center">
          {alert}
        </Alert>
      ))}
    </div>
  );
};

export default Notification;