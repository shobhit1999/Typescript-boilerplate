import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import CodeIcon from '@material-ui/icons/Code';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	drawer: {
		'& .MuiPaper-root': {
			background: theme.palette.secondary.main,
			borderTopRightRadius: theme.spacing(3),
		},
	},
	drawerHeader: {
		background: theme.palette.primary.main,
	},
	primary: {
		color: theme.palette.primary.main,
	},
}));

const LIST = [
	{ title: 'Home', icon: <HomeIcon color="primary" fontSize="small" /> },
	{ title: 'Contact Us', icon: <ContactSupportIcon color="primary" fontSize="small" /> },
];

const Default: React.FC = ({ children }) => {
	const classes = useStyles();

	const [open, setOpen] = useState<boolean>(false);

	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event &&
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}

		setOpen(open);
	};

	return (
		<div>
			<AppBar>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="open drawer"
						onClick={toggleDrawer(true)}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						Typescript Boilerplate
					</Typography>
				</Toolbar>
				<SwipeableDrawer
					anchor="left"
					open={open}
					onClose={toggleDrawer(false)}
					onOpen={toggleDrawer(true)}
					classes={{ root: classes.drawer }}>
					<>
						<Box
							height="56px"
							className={classes.drawerHeader}
							alignItems="center"
							justifyContent="center"
							display="flex">
							<CodeIcon fontSize="large" />
						</Box>
						<List>
							{LIST.map((item) => (
								<div key={item.title}>
									<ListItem button>
										<ListItemIcon color="primary">{item.icon}</ListItemIcon>
										<ListItemText primary={item.title} className={classes.primary} />
									</ListItem>
								</div>
							))}
						</List>
					</>
				</SwipeableDrawer>
			</AppBar>
			<Box p={2}>{children}</Box>
		</div>
	);
};

export default Default;
