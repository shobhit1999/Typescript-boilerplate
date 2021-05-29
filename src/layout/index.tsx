import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import LinearProgress from '@material-ui/core/LinearProgress';

import Default from './Default';

const Home = React.lazy(() => import('features/Home'));

const Layout: React.FC = () => (
	<Suspense fallback={<LinearProgress color="primary" />}>
		<Router>
			<Default>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</Default>
		</Router>
	</Suspense>
);

export default React.memo(Layout);
