import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, Action } from 'redux'
import ReduxApp from './ReduxedApp';

export interface AppState {
    userText: string
}

export enum Actions{
    UPDATE_USER_TEXT
}

const store = createStore((state: any, action: any): AppState => {
    return {
        userText: action.userText || ""
    }
});

ReactDOM.render(
    <Provider store={store}>
        <ReduxApp />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
