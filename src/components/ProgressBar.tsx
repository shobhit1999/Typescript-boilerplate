import React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

interface Props {
	loading: boolean;
}

const ProgressBar: React.FC<Props> = ({ loading }) => {
	if (!loading) return <></>;
	return <LinearProgress color="primary" />;
};

export default ProgressBar;
