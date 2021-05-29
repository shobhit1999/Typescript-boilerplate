import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { Slide, toast, ToastContainer } from 'react-toastify';

const ToastWrap = () => (
	<ToastContainer
		position={toast.POSITION.BOTTOM_CENTER}
		autoClose={3000}
		hideProgressBar
		closeButton={false}
		transition={Slide}
		draggable={false}
		pauseOnFocusLoss={false}
		closeOnClick={false}
		className="toaster"
	/>
);

export default React.memo(ToastWrap);
