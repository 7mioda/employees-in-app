/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import 'moment/locale/fr';


import Rater from './Rater';
import withStyle from './withStyle';

moment.locale('fr');

class EmployeeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

    handleShowDetails = () => {
      const { showDetails } = this.state;
      this.setState({ showDetails: !showDetails });
    }

    render() {
      const {
        className, employee: {
          image, firstName, lastName, bio, hireDate, skills,
        },
      } = this.props;
      const { showDetails } = this.state;
      const content = showDetails ? (
        <div
          className="details"
        >
          <h4>{firstName} {lastName}</h4>
          <p>{bio}</p>
          <p>{firstName} est notre héro en : {skills.map((element) => element.name).toString()}</p>
          <p> Il est oyezien  {moment(hireDate).fromNow()} </p>
        </div>
      ) : (
        <CardMedia
          className="media"
          image={image}
          title="Contemplative Reptile"
        />
      );
      return (
        <div className={className}>
          <Card className="card">
            <CardActionArea
              onClick={this.handleShowDetails}
            >
              {content}
            </CardActionArea>
            <CardActions>
              <Rater />
              <Button size="small" color="primary">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      );
    }
}

EmployeeCard.propTypes = {
  className: PropTypes.string.isRequired,
  employee: PropTypes.object.isRequired,
};

export default withStyle(EmployeeCard);
