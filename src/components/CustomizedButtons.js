import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: '#6185dd',
    color: '#fff',
    padding: '10px 15px',
    fontWeight: 500,
    width: '20em',
    fontSize: 12, fontFamily: [
      '"Montserrat"',
       '"Verdana"',
       ' sans-serif'
    ],
    '&:hover': {
      backgroundColor: '#89A4E6',
    },
  },
}))(Button);



export default function CustomizedButtons() {

//   function copyToClipboard(event) {
//     event && event.preventDefault();
//     var el = document.createElement("textarea"),
//       content = getResultAsText(),
//       span = document.querySelector("#copyToClipboardButton .sec-button__text");
//     el.value = content;
//     el.setAttribute("readonly", "");
//     el.setAttribute("tabindex", "-1");
//     el.style.position = "absolute";
//     el.style.left = "-9999px";
//     document.body.appendChild(el);
//     el.select();
//     document.execCommand("copy");
//     document.body.removeChild(el);
//     span.innerText = span.getAttribute("data-text-success");
//     span.parentNode.classList.add("sec-button_fit");
//     this.focus();
//     blurActiveElement();
//   }

  return (
    <div >
    <div  className="buttons">
    <div
      className="buttons__"
    >
      <ColorButton
       variant="contained"
       startIcon={<GetAppOutlinedIcon />}
        >
        Download.txt
      </ColorButton>
    </div>

    <div
      className="buttons__"
    >
      <ColorButton
       variant="contained"
       startIcon={<FileCopyOutlinedIcon />}
       onClick={'copyToClipboard'}
       >
      Copy to clipboard
      </ColorButton>
    </div>

    <div
      className="buttons__"
    >
      <ColorButton
       variant="contained"
       startIcon={<OpenInNewOutlinedIcon />}
        >
      Open as plain text
      </ColorButton>
    </div>

    <div
      className="buttons__"
    >
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