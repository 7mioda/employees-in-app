import React from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

import EmployeeCard from '../EmployeeCard/EmployeeCard';


class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

   componentDidMount = async () => {
     const result = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos');
     const { data } = result;
     this.setState({ employees: data });
   }

   render() {
     const { employees } = this.state;
     const emplyeesView = employees.map((element) => (
       <Grid item key={element.id}>
         <EmployeeCard employee={element} />
       </Grid>
     ));
     return (
       <Grid container justify="center" spacing={16}>
         { emplyeesView }
       </Grid>
     );
   }
}

export default EmployeeList;
