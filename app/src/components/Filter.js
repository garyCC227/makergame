import React, { useState, useEffect } from "react";
import style from "assets/styles/Filter.module.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { makeStyles } from "@material-ui/core/styles";
import FlashOnIcon from '@material-ui/icons/FlashOn';
import CheckIcon from '@material-ui/icons/Check';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';



const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	},
	nested: {
		paddingLeft: theme.spacing(4)
	}
}));

export default function Filter({ display, filterFunc }) {
	const [checked, setChecked] = useState([]);
	const classes = useStyles();
  const [filterOpen, setOpen] = React.useState({
    serve:false,
    elec:false,
    verified:false
  });

	const filterCheck = (newChecked, value) => {
		//for verified
		if (value === "verified" && checked.indexOf("unverified") !== -1) {
			const currentIndex = checked.indexOf("unverified");
			newChecked.splice(currentIndex, 1);
		}

		//unverified
		if (value === "unverified" && checked.indexOf("verified") !== -1) {
			const currentIndex = checked.indexOf("verified");
			newChecked.splice(currentIndex, 1);
		}

		//serve
		if (value === "serve" && checked.indexOf("unserve") !== -1) {
			const currentIndex = checked.indexOf("unserve");
			newChecked.splice(currentIndex, 1);
		}

		//unserve
		if (value === "unserve" && checked.indexOf("serve") !== -1) {
			const currentIndex = checked.indexOf("serve");
			newChecked.splice(currentIndex, 1);
		}

		//fully electirfied
		if (value === "Fully Electrified") {
			if (checked.indexOf("Partially Electrified") !== -1) {
				const currentIndex = checked.indexOf("Partially Electrified");
				newChecked.splice(currentIndex, 1);
			}

			if (checked.indexOf("Not Electrified") !== -1) {
				const currentIndex = checked.indexOf("Not Electrified");
				newChecked.splice(currentIndex, 1);
			}
		}

		//partially electrified
		if (value === "Partially Electrified") {
			if (checked.indexOf("Fully Electrified") !== -1) {
				const currentIndex = checked.indexOf("Fully Electrified");
				newChecked.splice(currentIndex, 1);
			}

			if (checked.indexOf("Not Electrified") !== -1) {
				const currentIndex = checked.indexOf("Not Electrified");
				newChecked.splice(currentIndex, 1);
			}
		}

		//not eletrified
		if (value === "Not Electrified") {
			if (checked.indexOf("Partially Electrified") !== -1) {
				const currentIndex = checked.indexOf("Partially Electrified");
				newChecked.splice(currentIndex, 1);
			}

			if (checked.indexOf("Fully Electrified") !== -1) {
				const currentIndex = checked.indexOf("Fully Electrified");
				newChecked.splice(currentIndex, 1);
			}
		}
	};

	const handleToggle = value => {
		const currentIndex = checked.indexOf(value);
		let newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
			filterCheck(newChecked, value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	useEffect(() => {
		filterFunc(checked);
	}, [checked, filterFunc]);

	const handleClick = (whichFilter) => {
		setOpen(prevState => ({
      ...prevState,
      [whichFilter]:!prevState[whichFilter]
    }));
    console.log(whichFilter,filterOpen);
    
	};

	return (
		<div className={style.filter} style={{ display: display }}>
			<List subheader={<ListSubheader> Filter </ListSubheader>}>
				<ListItem button onClick={()=>handleClick('verified')}>
					<ListItemIcon>
						<CheckIcon />
					</ListItemIcon>
					<ListItemText primary="Verified" />
					{filterOpen.verified ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={filterOpen.verified} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>

						{/* Verified */}
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<Checkbox
									size="medium"
									onChange={() => handleToggle("verified")}
									checked={checked.indexOf("verified") !== -1}
								/>
							</ListItemIcon>
							<ListItemText
								id="switch-list-label-verified"
								primary="Verified"
							/>
						</ListItem>

						{/* Unverified */}
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<Checkbox
									size="medium"
									onChange={() => handleToggle("unverified")}
									checked={checked.indexOf("unverified") !== -1}
								/>
							</ListItemIcon>
							<ListItemText
								id="switch-list-label-unverified"
								primary="Unverified"
							/>
						</ListItem>
					</List>
				</Collapse>
                              {/* serve by Pollinate section */}
        <ListItem button onClick={()=>handleClick('serve')}>
					<ListItemIcon>
						<RecordVoiceOverIcon />
					</ListItemIcon>
					<ListItemText primary="Serve by Pollinate" />
					{filterOpen.serve ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={filterOpen.serve} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
            {/* serve */}
				<ListItem button className={classes.nested}>
					<ListItemIcon>
						<Checkbox
							size="medium"
							onChange={() => handleToggle("serve")}
							checked={checked.indexOf("serve") !== -1}
						/>
					</ListItemIcon>
					<ListItemText id="switch-list-label-serve" primary="Serve" />
				</ListItem>
				{/* Unserve */}
				<ListItem button className={classes.nested}>
					<ListItemIcon>
						<Checkbox
							size="medium"
							onChange={() => handleToggle("unserve")}
							checked={checked.indexOf("unserve") !== -1}
						/>
					</ListItemIcon>
					<ListItemText id="switch-list-label-unserve" primary="Unserve" />
				</ListItem>
					</List>
				</Collapse>

				<ListItem button onClick={()=>handleClick('elec')}>
					<ListItemIcon>
						<FlashOnIcon />
					</ListItemIcon>
					<ListItemText primary="Electrified" />
					{filterOpen.elec ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={filterOpen.elec} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
            {/* Fully Electrified */}
				<ListItem button className={classes.nested}>
					<ListItemIcon>
						<Checkbox
							size="medium"
							onChange={() => handleToggle("Fully Electrified")}
							checked={checked.indexOf("Fully Electrified") !== -1}
						/>
					</ListItemIcon>
					<ListItemText
						id="switch-list-label-fullelectrified"
						primary="Fully Electrified"
					/>
				</ListItem>
				{/* Partially Electrified */}
				<ListItem button className={classes.nested}>
					<ListItemIcon>
						<Checkbox
							size="medium"
							onChange={() => handleToggle("Partially Electrified")}
							checked={checked.indexOf("Partially Electrified") !== -1}
						/>
					</ListItemIcon>
					<ListItemText
						id="switch-list-label-partelectrified"
						primary="Partially Electrified"
					/>
				</ListItem>
				{/* Not Electrified */}
				<ListItem button className={classes.nested}>
					<ListItemIcon>
						<Checkbox
							size="medium"
							onChange={() => handleToggle("Not Electrified")}
							checked={checked.indexOf("Not Electrified") !== -1}
						/>
					</ListItemIcon>
					<ListItemText
						id="switch-list-label-noelectrified"
						primary="Not Electrified"
					/>
				</ListItem>
					</List>
				</Collapse>
				
			</List>
		</div>
	);
}
