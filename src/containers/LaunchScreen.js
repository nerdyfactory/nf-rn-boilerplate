// import { connect } from 'react-redux';
// import * as customers from '../redux/customers';
import LaunchScreen from '../components/LaunchScreen';

LaunchScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

/*
const mapStateToProps = (state) => ({
  status: customers.getStatus(state),
  message: customers.getMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  requestOTP: (countyCode, phoneNumber) => dispatch(customers.requestOTP(countyCode, phoneNumber))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro);
*/

export default LaunchScreen;
