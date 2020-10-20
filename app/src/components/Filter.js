import React, { useState } from "react";
import style from "assets/styles/Filter.module.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import {
  teal,
  red,
  lightBlue,
  lime,
  deepOrange,
  orange,
  brown,
} from "@material-ui/core/colors";

const TealSwitch = withStyles({
  switchBase: {
    color: teal[0],
    "&$checked": {
      color: teal[500],
    },
    "&$checked + $track": {
      backgroundColor: teal[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const RedSwitch = withStyles({
  switchBase: {
    color: red[0],
    "&$checked": {
      color: red[500],
    },
    "&$checked + $track": {
      backgroundColor: red[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const LightBlueSwitch = withStyles({
  switchBase: {
    color: lightBlue[0],
    "&$checked": {
      color: lightBlue[500],
    },
    "&$checked + $track": {
      backgroundColor: lightBlue[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const LimeSwitch = withStyles({
  switchBase: {
    color: lime[0],
    "&$checked": {
      color: lime[500],
    },
    "&$checked + $track": {
      backgroundColor: lime[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const DeepOrangeSwitch = withStyles({
  switchBase: {
    color: deepOrange[0],
    "&$checked": {
      color: deepOrange[500],
    },
    "&$checked + $track": {
      backgroundColor: deepOrange[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const OrangeSwitch = withStyles({
  switchBase: {
    color: orange[0],
    "&$checked": {
      color: orange[500],
    },
    "&$checked + $track": {
      backgroundColor: orange[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const BrownSwitch = withStyles({
  switchBase: {
    color: brown[0],
    "&$checked": {
      color: brown[500],
    },
    "&$checked + $track": {
      backgroundColor: brown[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function Filter({ display }) {
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    console.log(checked);
    setChecked(newChecked);
  };

  return (
    <div className={style.filter} style={{ display: display }}>
      <List subheader={<ListSubheader>Filter</ListSubheader>}>
        {/* Verified */}
        <ListItem>
          <ListItemIcon>
            <i className="fas fa-circle"></i>
          </ListItemIcon>
          <ListItemText id="switch-list-label-verified" primary="Verified" />
          <ListItemSecondaryAction>
            <TealSwitch
              edge="end"
              onChange={() => handleToggle("verified")}
              checked={checked.indexOf("verified") !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>
        {/* Unverified */}
        <ListItem>
          <ListItemIcon>
            {/* <i className="fas fa-circle" style={{ color: red[500] }}></i> */}
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-unverified"
            primary="Unverified"
          />
          <ListItemSecondaryAction>
            <RedSwitch
              edge="end"
              onChange={() => handleToggle("unverified")}
              checked={checked.indexOf("unverified") !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>

        {/* Served */}
        <ListItem>
          <ListItemIcon>
            {/* <i className="fas fa-circle" style={{ color: lightBlue[500] }}></i> */}
          </ListItemIcon>
          <ListItemText id="switch-list-label-served" primary="Served" />
          <ListItemSecondaryAction>
            <LightBlueSwitch
              edge="end"
              onChange={() => handleToggle("served")}
              checked={checked.indexOf("served") !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>
        {/* Unserved */}
        <ListItem>
          <ListItemIcon>
            {/* <i className="fas fa-circle" style={{ color: lime[500] }}></i> */}
          </ListItemIcon>
          <ListItemText id="switch-list-label-unserved" primary="Unserved" />
          <ListItemSecondaryAction>
            <LimeSwitch
              edge="end"
              onChange={() => handleToggle("unserved")}
              checked={checked.indexOf("unserved") !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>
        {/* Fully Electrified */}
        <ListItem>
          <ListItemIcon>
            {/* <i className="fas fa-circle" style={{ color: deepOrange[500] }}></i> */}
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-fullelectrified"
            primary="Fully Electrified"
          />
          <ListItemSecondaryAction>
            <DeepOrangeSwitch
              edge="end"
              onChange={() => handleToggle("fullelectrified")}
              checked={checked.indexOf("fullelectrified") !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>

        {/* Partially Electrified */}
        <ListItem>
          <ListItemIcon>
            {/* <i className="fas fa-circle" style={{ color: orange[500] }}></i> */}
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-partelectrified"
            primary="Partially Electrified"
          />
          <ListItemSecondaryAction>
            <OrangeSwitch
              edge="end"
              onChange={() => handleToggle("partelectrified")}
              checked={checked.indexOf("partelectrified") !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>

        {/* Not Electrified */}
        <ListItem>
          <ListItemIcon>
            {/* <i className="fas fa-circle" style={{ color: brown[500] }}></i> */}
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-noelectrified"
            primary="Not Electrified"
          />
          <ListItemSecondaryAction>
            <BrownSwitch
              edge="end"
              onChange={() => handleToggle("noelectrified")}
              checked={checked.indexOf("noelectrified") !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
}
