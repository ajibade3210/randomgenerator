import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import OpenInNewOutlinedIcon from "@material-ui/icons/OpenInNewOutlined";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";

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

export default function CustomizedButtons({ results }) {
  const [backToTopButton, setBackToTopButton] = useState(false);
  const [copied, setCopied] = useState(false);

  const texts = results.toString()

  /* download file func */
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob(results, {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };

  /* effect for scroll button */
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollup = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  function openAsText(event) {
    event.preventDefault();
      let win = window.open("data:," , "Result | " + document.title);
      win = window.open();
    win.document.title = "Result | " + document.title;

    let separateList = '<ul>'
    results.forEach(function(value) {
       separateList += '<li>' + value + '</li>';
    });
    separateList += '</ul>';

    win.document.body.innerHTML = separateList
  }

  return (
    <div>
      <div className="result_buttons">
        <div className="buttons__ hide">
          <ColorButton variant="contained" onClick={downloadTxtFile} startIcon={<GetAppOutlinedIcon />}>
            Download.txt
          </ColorButton>
        </div>

        <div className="buttons__ show">
          <ColorButton
            variant="contained"
            startIcon={<FileCopyOutlinedIcon />}
          >
            <CopyToClipboard
              text={texts}
              onCopy={()=> setCopied(true)}
            >
          <span>{!copied ? 'Copy to clipboard' : 'Copied successfully'}</span>
            </CopyToClipboard>
          </ColorButton>
        </div>

        <div className="buttons__ show">
          <ColorButton
            variant="contained"
            startIcon={<OpenInNewOutlinedIcon />}
            onClick={openAsText}
          >
            Open as plain text
          </ColorButton>
        </div>

        <div className="buttons__ wide">
          <ColorButton
            variant="contained"
            startIcon={<ArrowUpwardOutlinedIcon />}
            onClick={scrollup}
          >
            Scroll to options
          </ColorButton>
        </div>
      </div>
    </div>
  );
}
