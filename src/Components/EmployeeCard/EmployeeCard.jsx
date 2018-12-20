import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Rater from './Rater';
import withStyle from './withStyle';

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
      const { className, employee: { url } } = this.props;
      const { showDetails } = this.state;
      const content = showDetails ? (
        <CardMedia
          className="media"
          image={url}
          title="Contemplative Reptile"
        />
      ) : (
        <CardMedia
          className="media"
          image="https://picsum.photos/300/300"
          title="Contemplative Reptile"
        />
      );
      return (
        <div className={className}>
          <Card className="card">
            <CardActionArea
              onClick={this.handleShowDetails}
              onMouseEnter={this.handleShowDetails}
              onMouseLeave={this.handleShowDetails}
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
