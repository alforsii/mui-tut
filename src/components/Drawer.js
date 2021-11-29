import React, { useState } from "react";
import {
  Drawer,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { AddCircleOutline, SubjectOutlined } from "@mui/icons-material";
import { useHistory } from "react-router";
import { makeStyles } from "@mui/styles";

const menuItems = [
  {
    path: "/",
    name: "My Notes ",
    icon: <SubjectOutlined color="secondary" />,
  },
  {
    path: "/create",
    name: "Create Note",
    icon: <AddCircleOutline color="secondary" />,
  },
];

export const drawerWidth = 240;
const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  page: {
    backgroundColor: "#f4f4f4",
    width: "100%",
  },

  drawer: {
    width: drawerWidth,
  },
  paper: {
    width: drawerWidth,
  },
});

export default function DrawerFC() {
  const classes = useStyles();
  const history = useHistory();
  const pathname = history.location.pathname;
  const itemIndex = { "/": 0, "/create": 1 };
  const [selectedItemIndex, setSelectedItemIndex] = useState(
    itemIndex[pathname]
  );
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.paper }}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={item.name}
            onClick={(e) => {
              history.push(item.path);

              setSelectedItemIndex(itemIndex[history.location.pathname]);
            }}
            selected={selectedItemIndex === index}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
