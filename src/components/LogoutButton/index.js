import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/users';

function LogoutButton (props) {
  console.log(props)
  return !!Object.keys(props.user).length && 
    <button className='nes-btn' onClick={props.logoutUser}>Log-out</button>
}

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  logoutUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);