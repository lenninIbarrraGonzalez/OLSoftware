import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import TuneIcon from "@material-ui/icons/Tune";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PersonIcon from "@material-ui/icons/Person";
import BarChartIcon from "@material-ui/icons/BarChart";

// eslint-disable-next-line import/prefer-default-export
export const listItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MenuBookIcon />
      </ListItemIcon>
      <ListItemText primary="Programación" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FormatListBulletedIcon />
      </ListItemIcon>
      <ListItemText primary="Gestión de operaciones" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TuneIcon />
      </ListItemIcon>
      <ListItemText primary="Perfiles" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SupervisorAccountIcon />
      </ListItemIcon>
      <ListItemText primary="Roles" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Usuario" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reportes" />
    </ListItem>
  </div>
);
