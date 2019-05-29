/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

import withStyle from './withStyle';

const SkillsListRow = ({ className, row, onDelete }) => (
	<TableRow className={`${className} row`}>
		<TableCell className="body" align="center">
			{row.name}
		</TableCell>
		<TableCell className="body" align="center">
			{row.logo}
		</TableCell>
		<TableCell className="body" align="center">
			<DeleteOutline
				className="action-icon"
				onClick={(event) => {
				  event.stopPropagation();
				  onDelete(row._id);
				}}
			/>
		</TableCell>
	</TableRow>
);

SkillsListRow.propTypes = {
  row: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default withStyle(SkillsListRow);
