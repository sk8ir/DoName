const React = require('react');
const $ = require('jquery');

export default React.createClass({
  displayName: 'PWS Modal',

  getInitialState: function () {
    return {
      submitted: false
    };
  },

  handleBuy: function () {
    $('.pws-modal').modal('hide');
  },

  handleSubmit: function () {
    this.setState({ submitted: true });
  },

  render: function() {
    if (!this.state.submitted) {
      return (
        <EnterWords />
      )
    } else {
      return (
        <SelectDomains />
      )
    }
  }
});
