/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarBorder from '@material-ui/icons/StarBorder';
import Star from '@material-ui/icons/Star';
import withStyle from './withStyle';

class Rater extends Component {
  constructor(props) {
    super(props);
    const { rating } = props;
    this.state = {
      rating: rating || 0,
      tempRating: 0,
    };
  }

  rate = (rating) => {
    this.setState({
      rating,
      tempRating: rating,
    });
  }

  hoverStar = (newRating) => {
    const { rating } = this.state;
    this.setState({
      tempRating: rating,
      rating: newRating,
    });
  };

  leaveStar = () => {
    const { tempRating } = this.state;
    this.setState({ rating: tempRating });
  };

  render() {
    const { className } = this.props;
    const { rating } = this.state;
    const stars = [];

    for (let i = 0; i < 5; i += 1) {
      if (rating >= i && rating != null) {
        stars.push(
          <Star
            key={i}
            onMouseOver={() => this.hoverStar(i)}
            onMouseOut={this.leaveStar}
            onClick={() => this.rate(i)}
          />
        );
      } else {
        stars.push(
          <StarBorder
            key={i}
            onMouseOver={() => this.hoverStar(i)}
            onMouseOut={this.leaveStar}
            onClick={() => this.rate(i)}
          />
        );
      }
    }
    return (
      <div className={className}>
        {stars}
      </div>
    );
  }
}

Rater.propTypes = {
  className: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default withStyle(Rater);
