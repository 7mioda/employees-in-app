import React from 'react';
import PropTypes from 'prop-types';

import withStyle from './withStyle';

const Logo = ({ logo, className }) => (
  <img src={`/images/${logo}`} alt="" className={`${className} logo `} />
);

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default withStyle(Logo);
