import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';

const PrivateHeader = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__title">
          <h1 className="header__title--text">{props.title}</h1>
          <p className="header__subtitle">#OAHACK</p>
        </div>
        <button className="button button--link-text" onClick={() => Accounts.logout()}>Logout</button>
      </div>
    </div>
  );
}

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PrivateHeader;
