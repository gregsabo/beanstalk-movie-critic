import React, { PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

@connect(state => ({
  movieName: state.critic.get('movieName')
}))
export default class Critic extends Component {
  static propTypes = {
    movieName: PropTypes.string,
    dispatch: PropTypes.func
  }

  render() {
    if (!this.props.movieName) {
      this.props.dispatch(pushState(null, '/'));
    }
    return (
      <div>
        <h1>Your judgement:</h1>
        <p>
          <em>{this.props.movieName}</em> is a terrible movie.
        </p>
      </div>
    );
  }
}
