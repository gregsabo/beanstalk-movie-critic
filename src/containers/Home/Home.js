import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { reduxForm } from 'redux-form';
import * as criticActions from 'redux/modules/critic';
import { Input, ButtonInput } from 'react-bootstrap';
import { pushState } from 'redux-router';

@reduxForm({
  form: 'critic',
  fields: ['movieName']
}, () => ({
}), criticActions)
export default class Home extends Component {
  static propTypes = {
    submitMovie: PropTypes.func,
    dispatch: PropTypes.func,
    fields: PropTypes.object
  };

  render() {
    const movieNameField = this.props.fields.movieName;
    return (
      <div className="container-fluid">
        <Helmet title="Home"/>
        <h1>Automatic Movie Critic</h1>
        <p>What is your favorite movie?</p>
        <form onSubmit={event => {
          event.preventDefault();
          this.props.submitMovie(movieNameField.value);
          this.props.dispatch(pushState(null, 'critic'));
        }}>
          <Input type="text" label="Movie Name" {...movieNameField} />
          <ButtonInput type="submit" bsStyle="primary" />
        </form>
      </div>
    );
  }
}
