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

export default function Filter({ display, filterFunc }) {
  const [checked, setChecked] = useState([]);

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

    //served
    if (value === "served" && checked.indexOf("unserved") !== -1) {
      const currentIndex = checked.indexOf("unserved");
      newChecked.splice(currentIndex, 1);
    }

    //unserved
    if (value === "unserved" && checked.indexOf("served") !== -1) {
      const currentIndex = checked.indexOf("served");
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

  const handleToggle = (value) => {
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

  return (
    <div className={style.filter} style={{ display: display }}>
      <List subheader={<ListSubheader>Filter</ListSubheader>}>
        {/* Verified */}
        <ListItem>
          <ListItemIcon>
            <Checkbox
              size="medium"
              onChange={() => handleToggle("verified")}
              checked={checked.indexOf("verified") !== -1}
            />
            {/* <TealSwitch
              size="small"
              onChange={() => handleToggle("verified")}
              checked={checked.indexOf("verified") !== -1}
            /> */}
          </ListItemIcon>
          <ListItemText id="switch-list-label-verified" primary="Verified" />
        </ListItem>
        {/* Unverified */}
        <ListItem>
          <ListItemIcon>
            <Checkbox
              size="medium"
              onChange={() => handleToggle("unverified")}
              checked={checked.indexOf("unverified") !== -1}
            />
            {/* <RedSwitch
              size="small"
              onChange={() => handleToggle("unverified")}
              checked={checked.indexOf("unverified") !== -1}
            /> */}
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-unverified"
            primary="Unverified"
          />
          <ListItemSecondaryAction>
            <i className="fas fas-circle">s</i>
          </ListItemSecondaryAction>
        </ListItem>

        {/* Served */}
        <ListItem>
          <ListItemIcon>
            <Checkbox
              size="medium"
              onChange={() => handleToggle("served")}
              checked={checked.indexOf("served") !== -1}
            />
            {/* <LightBlueSwitch
              size="small"
              onChange={() => handleToggle("served")}
              checked={checked.indexOf("served") !== -1}
            /> */}
          </ListItemIcon>
          <ListItemText id="switch-list-label-served" primary="Served" />
        </ListItem>
        {/* Unserved */}
        <ListItem>
          <ListItemIcon>
            <Checkbox
              size="medium"
              onChange={() => handleToggle("unserved")}
              checked={checked.indexOf("unserved") !== -1}
            />
            {/* <LimeSwitch
              size="small"
              onChange={() => handleToggle("unserved")}
              checked={checked.indexOf("unserved") !== -1}
            /> */}
          </ListItemIcon>
          <ListItemText id="switch-list-label-unserved" primary="Unserved" />
        </ListItem>
        {/* Fully Electrified */}
        <ListItem>
          <ListItemIcon>
            <Checkbox
              size="medium"
              onChange={() => handleToggle("Fully Electrified")}
              checked={checked.indexOf("Fully Electrified") !== -1}
            />
            {/* <DeepOrangeSwitch
              size="small"
              onChange={() => handleToggle("Fully Electrified")}
              checked={checked.indexOf("Fully Electrified") !== -1}
            /> */}
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-fullelectrified"
            primary="Fully Electrified"
          />
        </ListItem>

        {/* Partially Electrified */}
        <ListItem>
          <ListItemIcon>
            <Checkbox
              size="medium"
              onChange={() => handleToggle("Partially Electrified")}
              checked={checked.indexOf("Partially Electrified") !== -1}
            />
            {/* <OrangeSwitch
              size="small"
              onChange={() => handleToggle("Partially Electrified")}
              checked={checked.indexOf("Partially Electrified") !== -1}
            /> */}
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-partelectrified"
            primary="Partially Electrified"
          />
        </ListItem>

        {/* Not Electrified */}
        <ListItem>
          <ListItemIcon>
            <Checkbox
              size="medium"
              onChange={() => handleToggle("Not Electrified")}
              checked={checked.indexOf("Not Electrified") !== -1}
            />
            {/* <BrownSwitch
              size="small"
              onChange={() => handleToggle("Not Electrified")}
              checked={checked.indexOf("Not Electrified") !== -1}
            /> */}
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-noelectrified"
            primary="Not Electrified"
          />
        </ListItem>
      </List>
    </div>
  );
}
