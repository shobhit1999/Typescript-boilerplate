import React from 'react';
import { toast, ToastOptions } from 'react-toastify';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import InfoIcon from '@material-ui/icons/Info';

interface Props {
	message: string;
	Icon: React.FC;
}
const ToastMessage: React.FC<Props> = ({ message, Icon }) => {
	return (
		<Grid container alignItems="center" direction="row" wrap="nowrap">
			<Icon />
			<Box ml={1}>{message}</Box>
		</Grid>
	);
};

export default {
	error: (message: string, options?: ToastOptions): React.ReactText =>
		toast.error(<ToastMessage message={message} Icon={CancelIcon} />, options),
	info: (message: string, options?: ToastOptions): React.ReactText =>
		toast.info(<ToastMessage message={message} Icon={InfoIcon} />, options),
	success: (message: string, options?: ToastOptions): React.ReactText =>
		toast.success(<ToastMessage message={message} Icon={CheckCircleIcon} />, options),
};
