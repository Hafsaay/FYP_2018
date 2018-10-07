import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import ContactItem from "./ContactItem";
import { getContacts } from "../../actions/contactActions";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts, loading } = this.props.contact;
    let contactItem;

    if (contacts === null || loading) {
      contactItem = <Spinner />;
    } else {
      if (contacts.length > 0) {
        contactItem = contacts.map(contact => (
          <ContactItem key={contact._id} contact={contact} />
        ));
      } else {
        contactItem = <h4>No contacts found...</h4>;
      }
    }

    return (
      <div className="contacts">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Contacts</h1>
              <p className="lead text-center">All threads </p>
              {contactItem}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Contacts.propTypes = {
  getContacts: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  contact: state.contact
});

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
