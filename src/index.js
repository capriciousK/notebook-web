import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import App from "./js/pages/App";
import configureStore, {history} from "./js/store/configure-store";
import "./style/main.scss"

const initialState = {
    sample: {
        name: "NoteBook",
        data: []
    }
};

const store = configureStore(initialState);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, document.getElementById('root')
);
