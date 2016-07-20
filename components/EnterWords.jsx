const React = require('react');
const $ = require('jquery');
const FormInput = require('./FormInput.jsx')

export default React.createClass({
  displayName: 'PWS Modal',

  getInitialState: function () {
    return {
      inputs: [1, 2],
      totalInputs: 2
    };
  },

  handleBuy: function () {
    $('.pws-modal').modal('hide');
  },

  handleSubmit: function () {
    this.setState({ submitted: true });
  },

  appendInput: function() {
    this.state.totalInputs+=1;
    this.setState({ inputs: this.state.inputs.concat([this.state.totalInputs]) });
  },

  render: function() {
    return (
      <div>
        <h1>Tell us about your ideas.</h1>
        <p className='subheading'>Enter a few words that describe your company. These can describe anything from your product to your company values.</p>
        <form className="form-horizontal">
          <div id="dynamicInput">
            {this.state.inputs.map(input => <FormInput inputNum={input} />)}
          </div>
        </form>
        <button onClick={this.appendInput} className="btn btn-primary"> + Add another word</button>
      </div>
    )
  }
});
