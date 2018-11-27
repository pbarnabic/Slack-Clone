import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import SignUpHeader from './signup_header';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id] || {username: "", id:""}
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpHeader);
