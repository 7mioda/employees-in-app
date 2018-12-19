import React from 'react';
import EmployeeCard from './Components/EmployeeCard/EmployeeCard';


const App = () => (
  <div>
    Trombinoyez
    <EmployeeCard employee={{ url: 'https://picsum.photos/200/300' }} />
  </div>
);
export default App;
