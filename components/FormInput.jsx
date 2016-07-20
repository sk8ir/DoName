const React = require('react');
const $ = require('jquery');
const FormInput = require('./FormInput.jsx')

export default React.createClass({
  displayName: 'PWS Modal',

  propTypes: {
    inputNum: React.PropTypes.int,
  },

  getInitialState: function () {
    return {
      wordCount: 2
    };
  },

  handleBuy: function () {
    $('.pws-modal').modal('hide');
  },

  handleSubmit: function () {
    this.setState({ submitted: true });
  },

  render: function() {
    return (
      <div>
        <fieldset class="form-group">
          <div class = "input-group">
            <input type="word" className="form-control" id="word-inputs" />
            <div class="input-group-addon">{this.props.inputNum}.</div>
          </div>
        </fieldset>
      </div>
    )
  }
});
