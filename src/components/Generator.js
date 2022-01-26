import { useState } from "react";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";

import ShuffleOutlinedIcon from "@material-ui/icons/ShuffleOutlined";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@material-ui/core";
import CustomizedButtons from "./CustomizedButtons";
import Result from "./Result";
import ButtonThree from "./ButtonThree";
import ButtonTwo from "./ButtonTwo";
import ButtonOne from "./ButtonOne";

const Generator = () => {
  const [radioNumValue, setRadioNumValue] = useState("Integer");
  const [radioGenValue, setRadioGenValue] = useState("Range");
  const [click, setClick] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [bound, setBound] = useState(true);
  const [rangeFrom, setRangeFrom] = useState(0);
  const [rangeTo, setRangeTo] = useState(100000);
  const [hid, setHid] = useState(false);
  const [hidRange, setHidRange] = useState(true);
  const [hidLength, setHidlength] = useState(false);

  const [jet, setJet] = useState(false);

  const [buttonOneData, setButtonOneData] = useState(100);
  const [buttonTwoData, setButtonTwoData] = useState(2);
  const [buttonThreeData, setButtonThreeData] = useState(2);
  const [items, setItems] = useState({
    quantity: "100",
    answer: 0,
  })

  /* Hid and Update Length RadioGenValue Func*/
  const radioGenRange = (event) => {
    setRadioGenValue(event.target.value);
    setHidlength(false);
    return setHidRange(true);
  };

  /* Hid and Update Range RadioGenValue Func*/
  const radioGenLength = (event) => {
    setRadioGenValue(event.target.value);
    setHidRange(false);
    return setHidlength(true);
  };

  /* Radio Switch Func */
  const radioNumChange = (event) => {
    setRadioNumValue(event.target.value);
    if (radioNumValue === "Integer") {
      return setHid(true);
    } else if (radioNumValue === "Fractional") {
      return setHid(false);
    } else {
      return setHid(false);
    }
  };

  /* Update Range Input Value */
  const rangeUpdate = (event) => {
    setRangeFrom(event.target.value);
  };
  const rangeUpdates = (event) => {
    setRangeTo(event.target.value);
  };


  /* Buttons Data Func */
  const handeleButtonOne = (childData) => {
    setButtonOneData(childData);
  };
  const handeleButtonTwo = (childData) => {
    setButtonTwoData(childData);
  };
  const handeleButtonThree = (childData) => {
    setButtonThreeData(childData);
  };

  /* no repeat check Func */
  const repeatChecked = () => {
    setRepeat(true);
  };
  const boundChecked = () => {
    setBound(false);
  };



  const submitForm = (e) => {
    e.preventDefault();
    console.log('radioNumValue',radioNumValue);
    console.log('radioGenValue',radioGenValue);
    console.log('buttonOneData',buttonOneData);
    console.log('buttonTwoData',buttonTwoData);
    console.log('buttonThreeData',buttonThreeData);
    console.log('repeat',repeat);
    console.log('rangeFrom',rangeFrom);
    console.log('rangeTo',rangeTo);
    console.log('bound',bound);

    setJet(true)
    // setTimeout(() => {setClick(false)}, 500);
    
    
    setItems({
      quantity: buttonOneData,
    })
  };

  const onResetClick =(e) =>{
    e.preventDefault();
    console.log('reset');
    window.location.reload();
        // this.setState(this.initialState);
    }




  return (
    <div>
      <form className="htmlForm-wrapper" onSubmit={submitForm}>
        <div className="wrapper">
          <section className="generator">
            <div className="numberType left">
              <div className="htmlForm_input radio">
                <label htmlFor="numberType" className="form__label" style={{ marginRight: "25px" }}>
                  Number type:
                </label>

                <div>
                <Radio
                  checked={radioNumValue === "Integer"}
                  onChange={radioNumChange}
                  value="Integer"
                  name="Integer"
                  inputProps={{ "aria-label": "Integer" }}
                  style={{
                    transhtmlForm: "scale(1.5)",
                    color: "#6185DD",
                  }}
                />
                <span className="radio__text">Integer</span>
                <Radio
                  checked={radioNumValue === "Fractional"}
                  onChange={radioNumChange}
                  value="Fractional"
                  name="Fractional"
                  inputProps={{ "aria-label": "Fractional" }}
                  style={{
                    transhtmlForm: "scale(1.5)",
                    color: "#6185DD",
                  }}
                />
                <span className="radio__text">Fractional</span>
                </div>
              </div>

              <div className="htmlForm_input radio">
                <label htmlFor="numberType" className="form__label" style={{ marginRight: "7px" }}>
                  Generator type:
                </label>

                  <div>
                    <Radio
                      checked={radioGenValue === "Range"}
                      onChange={radioGenRange}
                      value="Range"
                      name="Range"
                      inputProps={{ "aria-label": "Range" }}
                      style={{
                        transhtmlForm: "scale(1.5)",
                        color: "#6185DD",
                      }}
                    />
                    <span className="radio__text">Range</span>
                    <Radio
                      checked={radioGenValue === "Length"}
                      onChange={radioGenLength}
                      value="Length"
                      name="Length"
                      inputProps={{ "aria-label": "Length" }}
                      style={{
                        transhtmlForm: "scale(1.5)",
                        color: "#6185DD",
                      }}
                    />
                    <span className="radio__text">Length</span>

                  </div>
              </div>

              <div className="responsive">
              <ButtonOne parentCallback={handeleButtonOne} />

              <div className="htmlForm_input">
                <label htmlFor="checkBox" className="form__label" style={{ marginRight: "50px" }}>
                  No repeats:
                </label>
                <Checkbox
                  id="checkBox"
                  onChange={repeatChecked}
                  style={{
                    color: "#6185DD",
                  }}
                />
              </div>
              </div>

            </div>
            <div className="numberType right">
              {hidLength && <ButtonTwo parentCallback={handeleButtonTwo} />}

              {hidRange && (
                <div className="responsive">
                  <div className="rangeNumber">
                    <label
                      htmlFor="range_from"
                      className="form__label range"
                      style={{ marginRight: "110px" }}
                    >
                      From:
                    </label>
                    <input
                      className="rangeInput width"
                      onChange={rangeUpdate}
                      value={rangeFrom}
                      type="nuber"
                      id="range_from"
                    />
                  </div>

                  <div className="rangeNumber">
                    <label htmlFor="range_to" className="form__label range" style={{ marginRight: "140px" }}>
                      To:
                    </label>
                    <input
                      className="rangeInput width"
                      onChange={rangeUpdates}
                      value={rangeTo}
                      type="number"
                      id="range_to"
                    />
                  </div>
                </div>
              )}

              {hid && <ButtonThree parentCallback={handeleButtonThree} />}

              {hidRange && (
                <div className="htmlForm_input">
                  <label htmlFor="bound_checkBox" className="form__label" style={{ marginRight: "10px" }}>
                    Include bounds:
                  </label>
                  <Checkbox
                  defaultChecked
                    onChange={boundChecked}
                    id="bound_checkBox"
                    style={{
                      color: "#6185DD",
                    }}
                  />
                </div>
              )}
            </div>
          </section>
        </div>

        <section className="htmlForm_button">
          <div className="submit_sec">
            <Button
              type="submit"
              className="submit_button"
              variant="contained"
              color="secondary"
              onClick={() => {
                setClick(true)
                setTimeout(() => {setClick(false)}, 500);
              }}
              startIcon={
                click ? (
                  <CircularProgress
                    size={30}
                    className="submit_loader"
                    style={{ color: "#fff" }}
                  />
                ) : (
                  <ShuffleOutlinedIcon size={50} />
                )
              }
            >
              Generate
            </Button>
            <Button
              onClick={onResetClick}
              className="submit_reset"
              color="primary"
              startIcon={<ClearOutlinedIcon />}
            >
              Reset
            </Button>
          </div>
        </section>
      </form>

{jet &&
(
  <>
  <div className="wrapper">
        <Result rangeFrom={rangeFrom} rangeTo={rangeTo} items={items.quantity} buttonOneData={buttonOneData} jet={jet}/>
      </div>
      <CustomizedButtons />
  </>
      )}

    </div>
  );
};

export default Generator;
