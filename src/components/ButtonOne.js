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

export default function ButtonOne({ parentCallback }) {
  const [high, setHigh] = useState(100);
  const classes = useStyles();

  function handleChange(event) {
    setHigh(event.target.value);
    parentCallback(event.target.value);
  }

  const quality = () => {
    if (high === 0) {
      return setHigh(0);
    }
    setHigh(high - 1);
    parentCallback(high - 1);
  };
  const qualityPlus = () => {
    setHigh(high + 1);
    parentCallback(high + 1);
  };

  return (
    <div className="htmlForm_input">
      <label htmlFor="buttonthree" className="form__label" style={{ marginRight: "80px" }}>
        Quantity
      </label>

      <div className={classes.root}>
        <div className="button_group">
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <button className="styledButton">
              <RemoveOutlinedIcon onClick={quality} />
            </button>
            <input
              className="rangeInput"
              onChange={handleChange}
              value={high}
              type="number"
              id="buttonthree"
            />
            <button className="styledButton">
              <AddOutlinedIcon onClick={qualityPlus} />
            </button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
