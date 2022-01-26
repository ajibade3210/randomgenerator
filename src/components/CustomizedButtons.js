import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import OpenInNewOutlinedIcon from "@material-ui/icons/OpenInNewOutlined";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: "#6185dd",
    color: "#fff",
    padding: "10px 15px",
    fontWeight: 500,
    width: "100%",
    fontSize: 12,
    fontFamily: ['"Montserrat"', '"Verdana"', " sans-serif"],
    "&:hover": {
      backgroundColor: "#89A4E6",
    },
  },
}))(Button);

export default function CustomizedButtons() {
  return (
    <div>
      <div className="result_buttons">
        <div className="buttons__ hide">
          <ColorButton variant="contained" startIcon={<GetAppOutlinedIcon />}>
            Download.txt
          </ColorButton>
        </div>

        <div className="buttons__ show">
          <ColorButton
            variant="contained"
            startIcon={<FileCopyOutlinedIcon />}
            onClick={"copyToClipboard"}
          >
            Copy to clipboard
          </ColorButton>
        </div>

        <div className="buttons__ show">
          <ColorButton
            variant="contained"
            startIcon={<OpenInNewOutlinedIcon />}
          >
            Open as plain text
          </ColorButton>
        </div>

        <div className="buttons__ wide">
          <ColorButton
            variant="contained"
            startIcon={<ArrowUpwardOutlinedIcon />}
          >
            Scroll to options
          </ColorButton>
        </div>
      </div>
    </div>
  );
}
