import React, { PropTypes, Component} from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  movieName: state.critic.get('movieName')
}))
export default class Critic extends Component {
  static propTypes = {
    movieName: PropTypes.string.isRequired
  }

  render() {
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
