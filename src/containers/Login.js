import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../actions/users';
import Login from '../views/Login'

const mapStateToProps = (state) => ({
    user: state.user,
    users: state.users,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loginUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);