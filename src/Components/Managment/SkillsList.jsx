/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import SkillForm from './SkillForm';
import SkillsListRow from './SkillsListRow';
import { getAllSkillSuggestion, removeSkillSuggestion } from '../../actions/skillAction';
import withStyle from './withStyle';

const SkillsList = ({
  className, skillsSuggestion, getAllSkillSuggestion, removeSkillSuggestion,
}) => {
  useEffect(() => {
    getAllSkillSuggestion();
  }, []);
  const skillsSuggestionView = skillsSuggestion.map((element) => (
    <SkillsListRow key={element._id} row={element} onDelete={removeSkillSuggestion} />
  ));

  return (
    <Paper className={className}>
      <Grid container justify="flex-start" spacing={16}>
        <Grid item xs={8}>
          <Table className="table">
            <TableHead>
              <TableRow>
                <TableCell className="head">Compétence</TableCell>
                <TableCell className="head" align="center">Logo</TableCell>
                <TableCell className="head" align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { skillsSuggestionView }
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={4}>
          <SkillForm skillsSuggestion={skillsSuggestion} />
        </Grid>
      </Grid>
    </Paper>
  );
};

SkillsList.propTypes = {
  className: PropTypes.string.isRequired,
  skillsSuggestion: PropTypes.array.isRequired,
  getAllSkillSuggestion: PropTypes.func.isRequired,
  removeSkillSuggestion: PropTypes.func.isRequired,
};

const mapStateToprops = (state) => ({
  skillsSuggestion: state.skill.skillsSuggestion,
});


export default compose(withStyle, connect(mapStateToprops,
  { getAllSkillSuggestion, removeSkillSuggestion }))(SkillsList);
