// import { connect } from 'react-redux';


// import * as customers from '../redux/customers';
import CounterScreen from '../Components/CounterScreen';

CounterScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

/** MOBX Approach */
import { inject } from 'mobx-react';
import { CountersActions } from '../Store'
console.log(CountersActions)
export default inject(({ store }) => (
  {
    counter: store.counters.counter,
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
