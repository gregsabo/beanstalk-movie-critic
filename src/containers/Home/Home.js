import React, { Component } from 'react';
import Helmet from 'react-helmet';
import reduxForm from 'redux-form';
import * as criticActions from 'redux/modules/critic';
import { Input, ButtonInput } from 'react-bootstrap';
import { pushState } from 'redux-router';

@reduxForm({
  form: 'critic',
  fields: ['movieName']
}, state => ({
}), criticActions)
export default class Home extends Component {
  static propTypes = {
    movieNameField: PropTypes.object,
    submitMovie: PropTypes.func,
  };

  render() {
    return (
      const movieField = this.props.fields.movieNameField;
      <div className="container-fluid">
        <Helmet title="Home"/>
        <h1>Automatic Movie Critic</h1>
        <p>What is your favorite movie?</p>
        <form onSubmit={event => {
          event.preventDefault();
          this.props.submitMovie(movieField.value);
          this.props.dispatch(pushState(null, 'critic'));
        }}>
          <Input type="text" label="Movie Name" {...movieField} />
          <ButtonInput type="submit" />
        </form>
      </div>
    );
  }
}
