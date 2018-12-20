import React, { lazy, Suspense } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const EmployeeCard = lazy(() => import('../EmployeeCard/EmployeeCard'));


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
         <Suspense fallback={<h4> Loading...</h4>}>
           <EmployeeCard employee={element} />
         </Suspense>
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
