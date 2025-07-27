import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    { name: 'React Basics', status: 'ongoing', duration: '4 weeks' },
    { name: 'Advanced Node', status: 'completed', duration: '6 weeks' }
  ];

  return (
    <div className="App">
      <h1>Academy Cohorts</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} {...cohort} />
      ))}
    </div>
  );
}

export default App;