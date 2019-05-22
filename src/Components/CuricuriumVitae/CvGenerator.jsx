/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { savePDF } from '@progress/kendo-react-pdf';
import EmployeeDetails from '../EmployeeCard/EmployeeDetails';


const CvGenerator = ({ employeeId, employee }) => {
  const createPdf = (html) => {
    savePDF(html, {
      paperSize: 'Letter',
      fileName: `cv$-${employeeId}.pdf`,
      margin: 3,
    });
  };
  const bodyRef = React.createRef();
  return (
    <React.Fragment>
      <button onClick={() => createPdf(bodyRef.current)}>Genrate</button>
      <div ref={bodyRef}>
        <EmployeeDetails employee={employee} />
      </div>
    </React.Fragment>
  );
};

CvGenerator.propTypes = {
  employeeId: PropTypes.string,
  employee: PropTypes.object,
};

const mapStateTpProps = (state, props) => ({
  employee: state.employees.employees.find((employee) => employee._id === props.employeeId),
});
export default connect(mapStateTpProps)(CvGenerator);
