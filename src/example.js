import React, { useState, useEffect } from "react";
import "./App.css";
import ReactSelect from "react-select";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

function ExampleFunc() {
  const [number, setNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState([]);
  const [template, setTemplate] = useState("");
  const [header, setHeader] = useState("");
  const [phnum, setphnum] = useState("");

  const options = [
    { value: "hello_world", label: "hello_world" },
    { value: "demo_template", label: "demo_template" },
  ];

  let Templates = [
    {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "919840911259",
      type: "template",
      template: {
        name: "hello_world",
        language: {
          code: "en_US",
        },
      },
    },
    {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: "919941898996",
      type: "template",
      template: {
        name: "demo_template",
        language: {
          code: "en_US",
        },
        components: [
          {
            type: "header",
            parameters: [
              {
                type: "image",
                image: {
                  link: "https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png",
                },
              },
            ],
          },
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: "there",
              },
            ],
          },
        ],
      },
    },
  ];

  useEffect(() => {
    //console.log("just jow changed", "_" + number);
    setData(
      Templates.filter((data) => {
        if (data.template.name === template) return data;
      })
    );
    setHeader("");
  }, [template]);

  const [Data, setData] = useState([{}]);

  //Bearer token
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer EAARhCnYzmeIBABRNQehWZB3BHZAHflWcuoxTrZA5dfGDz1aVz19rOZBtNvdsfqQXaPk00yRp8m2GzX14yPm5efgihqOtHlLGrOWIAVGlnHbdaGQcIxRk2KkSSXdKke26D176KZAC9CegXQZAQbdoEf5hvmnV3o2z4oZCJ3q8wkK89AI0WBFc0DFLZARLx58GaslJXUXPzT2SraWbLbdsvPLt"
  );

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(Data[0]),
    redirect: "follow",
  };

  const updateTemplate = (event) => {
    setTemplate(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (q) => {
    q.preventDefault();
    for (let i = 0; phoneNumber.length > i; i++) {
      console.log("submitHandler ran", requestOptions.body.at(0));
      if (phoneNumber[i] !== "") {
        console.log(
          "phoonenumber iin submti",
          phoneNumber[i],
          "phone number",
          phoneNumber
        );
        Data[0].to = phoneNumber[i].trim();
        if (Data[0].template.components) {
          if (Data[0].template.components[0].type === "header") {
            Data[0].template.components[0].parameters[0].image.link = header;
          }
        }
        fetch(
          "https://graph.facebook.com/v13.0/108343271966919/messages",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      }
    }
  };

  const [valid, setvalid] = useState(true);
  let arraynum = [];

  function placeCaretAtEnd(el) {
    el.focus();
    if (
      typeof window.getSelection != "undefined" &&
      typeof document.createRange != "undefined"
    ) {
      var range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
      var textRange = document.body.createTextRange();
      textRange.moveToElementText(el);
      textRange.collapse(false);
      textRange.select();
    }
  }

  const createSpan = (text) => {
    const ptag = document.getElementById("test");
    for (let i = 0; i < text.length; i++) {
      console.log("text", text);

      if (text[i] !== "") {
        const span = document.createElement("span");
        const spaceSpan = document.createElement("span");
        span.style.backgroundColor = "#1877F233";
        span.setAttribute("id", text[i]);
        const trimmed = text[i].trim();
        console.log("trimmed", text[i].trim());
        span.innerText =
          91 + trimmed.slice(trimmed.length - 10, trimmed.length);
        spaceSpan.innerText = "";
        spaceSpan.style.marginLeft = "4px";

        ptag.append(span);
        ptag.append(spaceSpan);
      }
    }
    placeCaretAtEnd(ptag);
  };

  const handleKeyDown = (e) => {
    console.log("length", e.target.innerText.length);
    var regx = /^[0-9]\d{9}/;
    if (e.keyCode === 32) {
      console.log(
        "handleKeyDown",
        e.target.innerText.slice(
          e.target.innerText.length - 10,
          e.target.innerText.length
        ),
        e.target.innerText.length
      );
      if (
        regx.test(
          e.target.innerText.slice(
            e.target.innerText.length - 10,
            e.target.innerText.length
          )
        )
      ) {
        var length = e.target.innerText.length;

        setvalid(true);
        arraynum = e.target.innerText.split("\n");
        console.log("arraynum", arraynum);
        e.target.innerText = "";
        createSpan(arraynum, length);

        console.log("final:", `${e.target.innerText}__`);
        console.log(
          "new one",
          e.target.innerText.slice(0, e.target.innerText.length - 1) + "-"
        );
        setNumber(e.target.innerText);
      } else {
        setvalid(false);
        console.log("not valid");
      }
    }
  };

  useEffect(() => {
    setPhoneNumber(number.split("\u00A0"));
    var trim = number.replace(`\n`, "");
    console.log("splitted num", number.split("\n"));
  }, [number]);

  return (
    <div className="example">
      <div className="outerbox">
        <div className="form">
          <div className="input-group">
            <p
              contentEditable
              className="numberField input"
              id="test"
              type="url"
              name="phoneNumber"
              data-placeholder="phone number"
              value={number}
              onKeyDown={handleKeyDown}
            ></p>
            <label className="user-label">Phone Number</label>
          </div>

          {valid ? null : (
            <p style={{ color: "red" }}>
              phone number should be 10 digits long
            </p>
          )}

          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "300px" },
            }}
            className="template"
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Template</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={template}
                label="template"
                onChange={updateTemplate}
              >
                <MenuItem value={"hello_world"}>hello_world</MenuItem>
                <MenuItem value={"demo_template"}>demo_template</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "300px" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              className="params1"
              value={header}
              onChange={(q) => {
                setHeader(q.target.value);
              }}
              label="Image Url"
              variant="outlined"
            />
          </Box>

          <div>
            <Button
              variant="contained"
              className="button"
              sx={{ color: "white", backgroundColor: "rgb(68, 211, 92)" }}
              endIcon={<SendIcon />}
              onClick={submitHandler}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleFunc;
