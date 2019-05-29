import React from 'react';
import * as PropTypes from 'prop-types';
import withStyle from './withStyle';

const EmployeeSnippet = ({ className, user: { firstName, lastName } }) => (
	<figure className={`${className}  hover snip1104`}>
		<figcaption>
			<h2>
				{firstName}
				<span>{lastName}</span>
			</h2>
		</figcaption>
	</figure>
);

EmployeeSnippet.propTypes = {
  className: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default withStyle(EmployeeSnippet);
