import React, { useEffect } from 'react';

import useService from 'Hooks/useService';

import { GetSampleAPI } from './Services';
import Toasty from 'components/Toasty';
import ProgressBar from 'components/ProgressBar';
import Grid from '@material-ui/core/Grid';

const Home: React.FC = () => {
	const [data, error, loading] = useService(GetSampleAPI, []);

	useEffect(() => {
		if (!error) return;
		Toasty.error(error.message);
	}, [error]);

	return (
		<>
			<ProgressBar loading={loading} />
			<Grid container alignItems="center" justify="center">
				{data}
			</Grid>
		</>
	);
};

export default Home;
