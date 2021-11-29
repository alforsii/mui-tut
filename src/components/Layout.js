import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";

import DrawerFC from "./Drawer";
import { drawerWidth } from "./Drawer";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    page: {
      backgroundColor: "#f4f4f4",
      width: "100%",
    },
    appbar: {
      maxWidth: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {},
  };
});

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* App bar */}
      <AppBar color="secondary" className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date}>
            Today is 27th February, Mon
          </Typography>
          <Typography className={classes.avatar}>Hi, John!</Typography>
          <Avatar src="" />
        </Toolbar>
      </AppBar>
      {/* Drawer */}
      <DrawerFC />
      {/* page */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
