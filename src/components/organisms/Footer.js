import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";

//ButtomNavi
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TargetIcon from "@material-ui/icons/CheckCircleOutline";
import SnsIcon from "@material-ui/icons/Forum";
import NotificationIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles(theme => ({
  footer: {
    position: "fixed",
    bottom: "0",
    width: "100%",
    zIndex: "100",
    margin: "0",
    padding: "0"
  }
}));

function Footer() {
  const classes = useStyles();
  const history = useHistory();
  const locate = useLocation();
  const tab = locate.search.slice(1);
  const [value, setValue] = React.useState(
    tab ? tab : locate.pathname.slice(1)
  );
  useEffect(() => {
    setValue(tab ? tab : locate.pathname.slice(1));
  }, [locate, tab, locate.pathname]);

  return (
    <footer className={classes.footer}>
      <BottomNavigation
        onChange={(event, newValue) => {
          setValue(newValue);
          history.replace(`/${newValue}`);
        }}
        value={value}
        showLabels
      >
        <BottomNavigationAction
          label="Target"
          icon={<TargetIcon />}
          value="target"
        />
        <BottomNavigationAction label="SNS" icon={<SnsIcon />} value="sns" />
        <BottomNavigationAction
          label="Notification"
          icon={<NotificationIcon />}
          value="notification"
        />
      </BottomNavigation>
    </footer>
  );
}
export default Footer;
