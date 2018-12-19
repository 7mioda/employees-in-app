import React from 'react';
import EmployeeCard from './Components/EmployeeCard/EmployeeCard';
import Header from './Components/Header/Header';


const App = () => (
  <div>
    <Header />
    <EmployeeCard employee={{ url: 'https://picsum.photos/200/300' }} />
  </div>
);
export default App;
