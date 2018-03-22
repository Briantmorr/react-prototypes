import React, { Component } from 'react';
import Field from "./field.js";
class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        }
        this.reset = this.reset.bind(this);
    }
    reset() {
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
            }
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.add(this.state.form);
        this.reset();
    }
    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        })
    }
    render() {
        const { firstName, lastName, phone, email } = this.state.form;

        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <Field name="firstName" label="First Name" type="text" value={firstName} onChange={e => this.handleInputChange(e)} />
                <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={e => this.handleInputChange(e)} />
                <Field name="phone" label="Phone Number" type="tel" value={phone} onChange={e => this.handleInputChange(e)} />
                <Field name="email" label="Email" type="email" value={email} onChange={e => this.handleInputChange(e)} />

                <button>Add Contact</button>
                <button onClick={this.reset}>Clear form</button>
            </form>
        )
    }

}

export default ContactForm;