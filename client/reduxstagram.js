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

// Build router
const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
);

render(router, document.getElementById('root'));