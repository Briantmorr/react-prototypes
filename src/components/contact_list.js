import React, { Component} from 'react';
import contactData from './data/contacts';
import ContactCard from './contact_card';

class ContactList extends Component{
    constructor(props){
        super(props);

        this.state = {
            contacts: contactData
        }
    }
    render(){
        console.log(this.state.contacts);
        return <h1>Contact List text</h1>
    }

}

export default ContactList;