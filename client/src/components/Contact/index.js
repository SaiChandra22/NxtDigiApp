import { Component } from "react";

import "./index.css";

class ContactUsForm extends Component {
  state = {
    nameInput: "",
    emailInput: "",
    showNameError: false,
    showEmailError: false,
    isFormSubmitted: false,
  };

  onBlurEmail = () => {
    const isValidEmail = this.validateEmail();

    this.setState({ showEmailError: !isValidEmail });
  };

  onChangeEmail = (event) => {
    const { target } = event;
    const { value } = target;

    this.setState({
      emailInput: value,
    });
  };

  renderEmailField = () => {
    const { emailInput, showEmailError } = this.state;
    const className = showEmailError
      ? "name-input-field error-field"
      : "name-input-field";

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="email">
          EMAIL
        </label>
        <input
          type="text"
          id="email"
          className={className}
          value={emailInput}
          placeholder="Email"
          onChange={this.onChangeEmail}
          onBlur={this.onBlurEmail}
        />
      </div>
    );
  };

  onBlurName = () => {
    const isValidName = this.validateName();

    this.setState({ showNameError: !isValidName });
  };

  onChangeName = (event) => {
    const { target } = event;
    const { value } = target;

    this.setState({
      nameInput: value,
    });
  };

  renderNameField = () => {
    const { nameInput, showNameError } = this.state;
    const className = showNameError
      ? "name-input-field error-field"
      : "name-input-field";

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="name">
          NAME
        </label>
        <input
          type="text"
          id="name"
          className={className}
          value={nameInput}
          placeholder="Name"
          onChange={this.onChangeName}
          onBlur={this.onBlurName}
        />
      </div>
    );
  };

  validateEmail = () => {
    const { emailInput } = this.state;

    return emailInput !== "";
  };

  validateName = () => {
    const { nameInput } = this.state;

    return nameInput !== "";
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const isValidName = this.validateName();
    const isValidEmail = this.validateEmail();

    if (isValidName && isValidEmail) {
      this.setState({ isFormSubmitted: true });
    } else {
      this.setState({
        showNameError: !isValidName,
        showEmailError: !isValidEmail,
        isFormSubmitted: false,
      });
    }
  };

  renderContactUsForm = () => {
    const { showNameError, showEmailError } = this.state;

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderNameField()}
        {showNameError && <p className="error-message">Required</p>}
        {this.renderEmailField()}
        {showEmailError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    );
  };

  onClickSubmitAnotherResponse = () => {
    this.setState((prevState) => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      nameInput: "",
      emailInput: "",
    }));
  };

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  );

  render() {
    const { isFormSubmitted } = this.state;

    return (
      <div className="contact-us-form-container">
        <h1 className="form-title">Contact Us</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderContactUsForm()}
        </div>
      </div>
    );
  }
}

export default ContactUsForm;
