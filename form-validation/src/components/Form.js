import React, { Component } from 'react';
import Message from './Message'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
            formComplete: false
        };
    }

    validateInput() {
        if (this.state.isEmailValid &&
            this.state.isNameValid &&
            this.state.isPhoneValid &&
            this.state.isUrlValid) {
            this.setState({ formComplete: true });
        }
        else {
            this.setState({ formComplete: false });
        }
    }

    handlePhoneChange(e) {
        this.setState({
            isPhoneValid: /^[0-1]\d{1,9}$/.test(e.target.value)
        });

        this.validateInput();
    };

    handleNameChange(e) {
        this.setState({
            isNameValid: e.target.value.length >= 3
                && e.target.value.length <= 30
                && /^[a-zA-Z]+$/.test(e.target.value)
        });

        this.validateInput();
    };

    handleUrlChange(e) {
        this.setState({ isUrlValid: validateUrl(e.target.value) });
        this.validateInput();
    };

    handleEmailChange(e) {
        this.setState({ isEmailValid: validateEmail(e.target.value) });
        this.validateInput();
    };

    render() {
        return (
            <div className="row">
                <h1 className="text-center">Form Validation</h1>
                <form>
                    <h3>Name:
                    <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)}></input>
                    </h3>
                    <h3>Email:
                    <input type="text" value={this.state.email} onChange={this.handleEmailChange.bind(this)}></input>
                    </h3>
                    <h3>Phone:
                    <input type="text" value={this.state.phone} onChange={this.handlePhoneChange.bind(this)}></input>
                    </h3>
                    <h3>Blog URL:
                    <input type="text" value={this.state.url} onChange={this.handleUrlChange.bind(this)}></input>
                    </h3>
                </form>
                <Message formComplete={this.state.formComplete} />
            </div>);
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

function validateUrl(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

export default Form;
