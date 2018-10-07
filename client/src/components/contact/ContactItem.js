import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactItem extends Component {
  render() {
    const { contact } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{contact.name}</h3>
            <p>{contact.email} </p>
            <p>{contact.text} </p>
          </div>
        </div>
      </div>
    );
  }
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
