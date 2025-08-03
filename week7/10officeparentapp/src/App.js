import React from 'react';

function App() {
  const offices = [
    { Name: "DBS", Rent: 50000, Address: "Chennai", Img: "https://via.placeholder.com/250" },
    { Name: "Regus", Rent: 70000, Address: "Bangalore", Img: "https://via.placeholder.com/250" },
    { Name: "WeWork", Rent: 60000, Address: "Hyderabad", Img: "https://via.placeholder.com/250" }
  ];

  return (
    <div>
      <h1>Office Space , at Affordable Range</h1>
      {offices.map((item, idx) => {
        const rentColor = item.Rent <= 60000 ? 'red' : 'green';
        return (
          <div key={idx}>
            <img src={item.Img} width="250" height="250" alt="Office Space" />
            <h2>Name: {item.Name}</h2>
            <h3 style={{ color: rentColor }}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;