import React from 'react';
import Grid from '@material-ui/core/Grid';
import api from '../../api';

import EmployeeCard from '../EmployeeCard/EmployeeCard';


class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

   componentDidMount = async () => {
     const { data: { employees } } = await api({
       method: 'get',
       url: '/employees',
     });
     this.setState({ employees });
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
