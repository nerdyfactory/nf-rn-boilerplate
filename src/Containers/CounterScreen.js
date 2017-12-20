
/** MobX *
import { CountersActions } from '../Store'
import { inject } from 'mobx-react'
/** */

/** Redux */
import { connect } from 'react-redux'
import AppRedux from '../Store/Redux/AppRedux'
/** */

import CounterScreen from '../Components/CounterScreen'

CounterScreen.navigationOptions = () => {
  return {
    header: null
  }
}

/** MobX *
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

/** Redux */
const mapStateToProps = (state) => ({
  counter: state.app.counter
})

const mapDispatchToProps = {
  increase: AppRedux.counterIncrease,
  decrease: AppRedux.counterDecrease
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterScreen)
/** */
