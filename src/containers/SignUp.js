import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createUser } from '../actions/users';
import SignUp from '../views/SignUp'

const mapStateToProps = (state) => ({
    users: state.users,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);