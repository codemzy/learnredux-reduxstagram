import React from 'react';

import { render } from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import react router dependencies
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

// Bindings to allow us to use Redux with React
import { Provider } from 'react-redux';

// Import our store
import store, { history } from './store';

// Build router
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));