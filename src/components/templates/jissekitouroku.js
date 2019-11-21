import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles1 = makeStyles(theme => ({
  button: {
    display: "block"
  },
  formControl: {
    minWidth: 200
  }
}));

const useStyles2 = makeStyles(theme => ({
  container: {
    display: "block"
  },
  textField2: {
    width: 200
  }
}));

const useStyles3 = makeStyles(theme => ({
  container: {
    display: "block"
  },
  textField3: {
    width: 200
  }
}));

const useStyles4 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function DatePickers() {
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  const classes4 = useStyles4();
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [hour, setHour] = React.useState("");
  const [open2, setOpen2] = React.useState(false);
  const [resultDate, setResultDate] = React.useState("");

  const handleChange2 = event => {
    setHour(event.target.value);
  };

  const resultDateChange = event => {
    setResultDate(event.target.value);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  return (
    <div>
      <FormControl className={classes1.formControl}>
        受験資格 　{" "}
        <InputLabel id="demo-controlled-open-select-label1"></InputLabel>
        <Select
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>FE：基本情報技術者試験</MenuItem>
          <MenuItem value={20}>AE：応用情報技術者試験</MenuItem>
          <MenuItem value={30}>SC：安全確保支援士試験</MenuItem>
          <MenuItem value={40}>ST：ITストラテジスト試験</MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <br></br>
      実績登録日
      <div className={classes2.container} noValidate>
        <TextField
          id="date"
          type="date"
          className={classes2.textField1}
          value={resultDate}
          onChange={resultDateChange}
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
      <br></br>
      実績勉強時間
      <br></br>
      <FormControl className={classes3.formControl3}>
        <InputLabel id="demo-controlled-open-select-label3"></InputLabel>
        <Select
          id="demo-controlled-open-select3"
          open={open2}
          onClose={handleClose2}
          onOpen={handleOpen2}
          value={hour}
          onChange={handleChange2}
        >
          <MenuItem value={1}>1時間</MenuItem>
          <MenuItem value={2}>2時間</MenuItem>
          <MenuItem value={3}>3時間</MenuItem>
          <MenuItem value={4}>4時間</MenuItem>
          <MenuItem value={5}>5時間</MenuItem>
          <MenuItem value={6}>6時間</MenuItem>
          <MenuItem value={7}>7時間</MenuItem>
          <MenuItem value={8}>8時間</MenuItem>
          <MenuItem value={9}>9時間</MenuItem>
          <MenuItem value={10}>10時間</MenuItem>
          <MenuItem value={11}>11時間</MenuItem>
          <MenuItem value={12}>12時間</MenuItem>
          <MenuItem value={13}>13時間</MenuItem>
          <MenuItem value={14}>14時間</MenuItem>
          <MenuItem value={15}>15時間</MenuItem>
          <MenuItem value={16}>16時間</MenuItem>
          <MenuItem value={17}>17時間</MenuItem>
          <MenuItem value={18}>18時間</MenuItem>
          <MenuItem value={19}>19時間</MenuItem>
          <MenuItem value={20}>20時間</MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <br></br>
      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes4.margin}
        onClick={() => {
          console.log({ age, resultDate, hour });
        }}
      >
        実績を登録する
      </Button>
    </div>
  );
}
