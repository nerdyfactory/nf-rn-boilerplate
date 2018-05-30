// import { connect } from 'react-redux';
// import * as customers from '../redux/customers';
import LaunchScreen from "../Components/LaunchScreen";

LaunchScreen.navigationOptions = () => {
  return {
    header: null
  };
};

/*
const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
)(Intro);
*/

export default LaunchScreen;
