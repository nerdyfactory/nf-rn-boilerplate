// import { connect } from 'react-redux';


// import * as customers from '../redux/customers';
import CounterScreen from '../Components/CounterScreen';

CounterScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

/** MOBX Approach *
import { inject } from 'mobx-react';
import { CountersActions } from '../Store'

export default inject(({ store }) => (
  {
    // Stores
    counter: store.counters.counter,
    // Actions
    increase: CountersActions.increase,
    decrease: CountersActions.decrease
  }
))(CounterScreen)
/** */

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
