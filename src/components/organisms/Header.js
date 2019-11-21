import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountBox from "@material-ui/icons/AccountBox";
import { useHistory } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import PersonIcon from "@material-ui/icons/Person";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ListIcon from "@material-ui/icons/List";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import TimelapseIcon from "@material-ui/icons/Timelapse";

const useStyles = makeStyles(theme => ({
  header: {
    position: "fixed",
    top: "0px",
    left: "0px",
    width: "100%",
    zIndex: "100",
    margin: "0",
    padding: "0",
    backgroundColor: "#ff8c00"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: 250
  }
}));

function Header() {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState({ left: false });
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  const menuClick = value => event => {
    history.push("/" + value);
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <ListItemText primary="Achievement" />
        </ListItem>

        <ListItem
          button
          key="checkTarget"
          onClick={menuClick("mokuhyoukannri")}
        >
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="目標/実績管理" />
        </ListItem>

        <ListItem button key="addTarget" onClick={menuClick("profile")}>
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText primary="目標を追加" />
        </ListItem>

        <ListItem
          button
          key="jissekitouroku"
          onClick={menuClick("jissekitouroku")}
        >
          <ListItemIcon>
            <TimelapseIcon />
          </ListItemIcon>
          <ListItemText primary="進捗登録" />
        </ListItem>
      </List>

      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="SNS" />
        </ListItem>
        <ListItem button key="checkThread" onClick={menuClick("snsOverview")}>
          <ListItemIcon>
            <InsertChartIcon />
          </ListItemIcon>
          <ListItemText primary="コミュニティスレッド" />
        </ListItem>
      </List>

      <ListItem button key="goukakuki" onClick={menuClick("goukakuki?sns")}>
        <ListItemIcon>
          <InsertCommentIcon />
        </ListItemIcon>
        <ListItemText primary="合格体験記" />
      </ListItem>

      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="Notification" />
        </ListItem>
        <ListItem button key="notify" onClick={menuClick("notification")}>
          <ListItemIcon>
            <NotificationsActiveIcon />
          </ListItemIcon>
          <ListItemText primary="通知" />
        </ListItem>

        <ListItem button key="shareIPPO" onClick={menuClick}>
          <ListItemIcon>
            <InsertLinkIcon />
          </ListItemIcon>
          <ListItemText primary="IPPOと連携する" />
        </ListItem>

        <ListItem
          button
          key="confirmprofile"
          onClick={menuClick("confirmprofile")}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="プロフィール確認" />
        </ListItem>
      </List>
    </div>
  );
  return (
    <header className={classes.header}>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Apollo
          </Typography>
          <Button color="inherit" onClick={() => history.replace("/logout")}>
            LogOut
          </Button>
          <AccountBox></AccountBox>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
