import { connect } from 'react-redux'
import TextInput, { TextInputProps } from './TextInput';
import { AppState, Actions } from '.';

const mapStateToProps = (state: AppState) => {
  return {
    inputValue: state.userText
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleChange: (e: any) => {
      dispatch({
        type: Actions.UPDATE_USER_TEXT,
        userText: e.target.value
      })
    }
  }
}

const ReduxInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput)

export default ReduxInput