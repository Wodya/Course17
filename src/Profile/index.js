import { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { MyDataContext } from "../index";
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {setMailing} from "./profileSlice";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

const Profile = (props) => {
  const classes = useStyles();
  const { isMailing } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(setMailing(event.target.checked));
  };

  return (
      <div>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Профиль пользователя</FormLabel>
        <FormControlLabel
          control={<Checkbox checked={isMailing} onChange={handleChange} name="isMailing" />}
          label="Получать рассылку"
        />
        </FormControl>
      </div>
  );
};


export default Profile;
