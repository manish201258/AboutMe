import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        // Get user's IP Address
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.json();
        const userIP = data.ip;

        // Retrieve stored visitors & unique IPs from localStorage
        let visitorCount = parseInt(localStorage.getItem("visitorCount")) || 0;
        let storedIPs = JSON.parse(localStorage.getItem("visitorIPs")) || [];

        // If IP is new, increase count & store IP
        if (!storedIPs.includes(userIP)) {
          visitorCount += 1;
          storedIPs.push(userIP);

          // Update localStorage
          localStorage.setItem("visitorCount", visitorCount);
          localStorage.setItem("visitorIPs", JSON.stringify(storedIPs));

          setVisitors(visitorCount);
        } else {
          // If user is returning, just show the existing count
          setVisitors(visitorCount);
        }
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div style={styles.visitorCounter}>
      👥 Visitors: {visitors}
    </div>
  );
};

const styles = {
  visitorCounter: {
    position: "fixed",
    bottom: "10px",
    right: "15px",
    background: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: "8px 15px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "bold",
    zIndex: 1000,
  },
};

export default VisitorCounter;
