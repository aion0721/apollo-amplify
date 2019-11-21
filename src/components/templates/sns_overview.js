import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const useStyles2 = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '10px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 20,
    },
    pos: {
      marginBottom: 'opx',
    },
});


const useStyles3 = makeStyles(theme => ({
    div1: {
        fontSize: 14,
        },
    }));

export default function SimpleTabs() {
  const classes = useStyles();
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  const preventDefault = event => event.preventDefault();

  return (
    <div className={classes.root}>
    <Card className={classes2.card}>
      <CardContent>
       <Typography className={classes2.title} color="textSecondary" gutterBottom>
        <Link href="#" onClick={preventDefault} className={classes3.link}>
        {'基本情報試験'}
        </Link>
        <br></br>
       </Typography>
      </CardContent> 
      <div className={classes3.div1}>
       トピックオーナー：
       <br></br>
       スレッド数:
       </div> 
    </Card>


    <Divider />
    <Card className={classes2.card}>
      <CardContent>
       <Typography className={classes2.title} color="textSecondary" gutterBottom>
       <Link href="#" onClick={preventDefault} className={classes3.link}>
       {'基本情報試験'}
       </Link> 
       </Typography>
      </CardContent>
      <div className={classes3.div1}>
       トピックオーナー：
       <br></br>
       スレッド数:
       </div> 
    </Card> 
    <Divider />

    <Card className={classes2.card}>
      <CardContent>
       <Typography className={classes2.title} color="textSecondary" gutterBottom>
       <Link href="#" onClick={preventDefault} className={classes3.link}>
       {'基本情報試験'}
        </Link>   
       </Typography>
      </CardContent> 
      <div className={classes3.div1}>
       トピックオーナー：
       <br></br>
       スレッド数:
       </div> 
    </Card>
    <Divider />
    </div>
  );
}
