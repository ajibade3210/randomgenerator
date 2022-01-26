import React, { useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ButtonThree({ parentCallback }) {
  const [fraction, setFraction] = useState(2);
  const classes = useStyles();

  function handleChange(event) {
    setFraction(event.target.value);
    parentCallback(event.target.value);
  }

  const settings = () => {
    if (fraction === 0) {
      return setFraction(0);
    }
    setFraction(fraction - 1);
    parentCallback(fraction - 1);
  };
  const settingsPlus = () => {
    setFraction(fraction + 1);
    parentCallback(fraction + 1);
  };

  return (
    <div className="htmlForm_input">
      <label
        htmlFor="buttontwo"
        className="form__label"
        style={{ marginRight: "10px" }}
      >
        Fraction Length:
      </label>

      <div className={classes.root}>
        <div className="button_group">
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <button type="button"className="styledButton">
              <RemoveOutlinedIcon onClick={settings} />
            </button>
            <input
              className="rangeInput"
              onChange={handleChange}
              value={fraction}
              type="number"
              id="buttonthree"
            />
            <button type="button" className="styledButton">
              <AddOutlinedIcon onClick={settingsPlus} />
            </button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
