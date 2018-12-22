import { connect } from 'react-redux'
import App from './App';
import { AppState } from '.';

const mapStateToProps = (state: AppState) => {
  return {
    headerText: state.userText
  }
}

const ReduxApp = connect(mapStateToProps)(App)

export default ReduxApp