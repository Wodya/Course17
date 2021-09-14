import React, {useCallback, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { setLoading, setData } from "./cardSlice";
import {CircularProgress} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chatWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  componentWrapper: {
    width: "250px",
    height: "400px",
    border: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card:{
    height: "100%",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center"
  }
}));

const CARD_URL = "https://deckofcardsapi.com/api/deck/g2qowvspars6/draw/?count=1";
export const getCardProc = () => async (dispatch, getState) => {
  const {loading} = getState();

  if (loading)
    return;

  try {
    dispatch(setLoading(true));
    const response = await fetch(CARD_URL);
    if (!response.ok)
      throw new Error("Something went wrong");

    const result = await response.json();
    dispatch(setData(result.cards[0].image));
    console.log(result.cards[0].image);

  } catch (e) {
  } finally {
     dispatch(setLoading(false));
  }
}

const Card = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { data, loading } = useSelector((state) => state.card);
  console.log(loading);

  const getCard =  useCallback(
    () => dispatch(getCardProc()),
    [dispatch]
  );

  return (
    <div className={classes.chatWrapper}>
      <div className={classes.componentWrapper}>
        <div className={classes.card}>
          {loading && <CircularProgress />}
          {!loading && data &&(
            <img src={data} alt=""/>
          )}
        </div>
      <Button variant="contained" color="primary" onClick={getCard} disabled={loading}>
        Получить карту
      </Button>
      </div>
    </div>
  );
}

export default Card;
