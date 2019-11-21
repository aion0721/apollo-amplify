import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
    div1: {
    width: '100%',
    },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  button: { 
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));



export default function ComposedTextField() {

  const labelRef = React.useRef(null);
  const classes = useStyles();

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const history = useHistory();

  return (
    <Container className={classes.container}>
      <div className = {classes.div1}>
      <Typography variant="h6" gutterBottom>
        ユーザ名
      </Typography>
      <FormControl className={classes.formControl} variant="outlined" >
        <InputLabel ref={labelRef} htmlFor="component-outlined">
          
        </InputLabel>
        <OutlinedInput  
        />
      </FormControl>
      </div>
      <div className = {classes.div1}>
      <Typography variant="h6" gutterBottom>
        所属部署
      </Typography>
      <FormControl className={classes.formControl}> 
        <InputLabel htmlFor="age-native-helper"></InputLabel>
        <NativeSelect
          value={state.age}
          onChange={handleChange('age')}
          inputProps={{
            name: 'age',
            id: 'age-native-helper',
          }}
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        </FormControl> 
        </div>
        <div className = {classes.div1}>
        <Typography variant="h6" gutterBottom>
        担当エリア
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-helper"></InputLabel>
        <NativeSelect
          value={state.age}
          onChange={handleChange('age')}
          inputProps={{
            name: 'age',
            id: 'age-native-helper',
          }}
        >
          <option value="" />
          <option value={10}>基盤</option>
          <option value={20}>業務</option>
          <option value={30}>運用</option>
        </NativeSelect>
        </FormControl> 
        </div>
        <div className = {classes.div1}>
        <Typography variant="h6" gutterBottom>
       興味や関心のある分野、技術
      </Typography>
      <FormControl>
      <NativeSelect
          value={state.age}
          onChange={handleChange('age')}
          inputProps={{
            name: 'age',
            id: 'age-native-helper',
          }}
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
       
      <NativeSelect
          value={state.age}
          onChange={handleChange('age')}
          inputProps={{
            name: 'age',
            id: 'age-native-helper',
          }}
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
       <NativeSelect
          value={state.age}
          onChange={handleChange('age')}
          inputProps={{
            name: 'age',
            id: 'age-native-helper',
          }}
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        </FormControl> 
          </div>
          <div className = {classes.div1}>
        <Typography variant="h6" gutterBottom>
        コメント（プロフィールや経歴など）
      </Typography>
      <TextField
          id="outlined-multiline-static"
          label="コメント"
          multiline
          rows="4"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
          </div>
          <div className = {classes.div1}>
          <ListItem button onClick={(event) => history.push("/confirmprofile")}>
      <Button variant="contained" size="large" color="primary" className={classes.margin}>
        プロフィールを更新
      </Button>
      </ListItem>
      </div>
    </Container>
  );
        }