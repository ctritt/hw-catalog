import React from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const Landing = ({ setAlert }) => {
  
  const showAlert = e => {
    console.log('button pressed');
    setAlert('Button Clicked', 'success');
  };
  
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  setAlert: PropTypes.func
};

export default connect(
  null,
  { setAlert }
)(Landing);
