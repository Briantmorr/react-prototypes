import React from 'react';

export default props => {
    const {firstName, lastName, email, phone} = props.contact;
    return (
        <div className="col-6 my-3">
            <div className="card">
                <div className="card-header">
                    {lastName}
                </div>
                <div className="card-block">
                    <h4 className="card-title"> {firstName}</h4>
                    <div className="card-text">
                        <p><b>Phone: </b>{phone}</p>
                        <p><b>Email: </b>{email}</p>
                    </div>
                </div>
            </div>
        </div>)
}