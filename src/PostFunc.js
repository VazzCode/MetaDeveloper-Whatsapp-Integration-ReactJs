import React, { useState, useEffect } from "react";
import "./App.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { CountryDropdown } from "react-country-region-selector";
import "./Templates.json";

function PostFunc() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [template, setTemplate] = useState("choose template");
  const [country, setCountry] = useState("");
  const [jsonfile, setJSON] = useState((country, phoneNumber) => "");

  useEffect(() => {
    console.log("useEffect has ran");

    //updateTemplate();
  }, [phoneNumber, country]);

  const [raw, setRaw] = useState([
    "choose the template",
    {
      messaging_product: "whatsapp",
      to: country + phoneNumber,
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
      to: country + phoneNumber,
      type: "template",
      template: {
        name: "TEMPLATE_NAME",
        language: {
          code: "LANGUAGE_AND_LOCALE_CODE",
        },
        components: [
          {
            type: "header",
            parameters: [
              {
                type: "image",
                image: {
                  link: "http(s)://URL",
                },
              },
            ],
          },
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: "TEXT_STRING",
              },
              {
                type: "currency",
                currency: {
                  fallback_value: "VALUE",
                  code: "USD",
                  amount_1000: "NUMBER",
                },
              },
              {
                type: "date_time",
                date_time: {
                  fallback_value: "MONTH DAY, YEAR",
                },
              },
            ],
          },
          {
            type: "button",
            sub_type: "quick_reply",
            index: "0",
            parameters: [
              {
                type: "payload",
                payload: "PAYLOAD",
              },
            ],
          },
          {
            type: "button",
            sub_type: "quick_reply",
            index: "1",
            parameters: [
              {
                type: "payload",
                payload: "PAYLOAD",
              },
            ],
          },
        ],
      },
    },
  ]);

  // const [header, setHeader] = useState("");
  // const [body, setBody] = useState("");
  // const [button, setButton] = useState("");

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer EAAHWVUHv6ZBYBAKZAu4GVBFZAm7cjcSvu69UjqiZAPbOyo7dCpIwFYa7QcNNUhtEPTzrmjSWPTHG0pHZAxZCeIhotb3XsbulZBrZAkAc71Bun9KyfkuGZBWXOIMt7WMIRYV67F4rZBRCUkZBLnCmf69H0MM0mDQZAYwORdRaZCtj2k89eQN3z4ijlryVGAQZA9ZCWaGsWfZAo1sXp0rWDQZDZD"
  );

  // var raw1 = [
  //   JSON.stringify({
  //     messaging_product: "whatsapp",
  //     recipient_type: "individual",
  //     to: country + phoneNumber,
  //     type: "template",
  //     template: {
  //       name: "hi_navin",
  //       language: {
  //         code: "en_US",
  //       },
  //       components: [
  //         {
  //           type: "header",
  //           parameters: [
  //             {
  //               type: "image",
  //               image: {
  //                 link: "https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png",
  //               },
  //             },
  //           ],
  //         },
  //         {
  //           type: "body",
  //           parameters: [
  //             {
  //               type: "text",
  //               text: "Vasanth",
  //             },
  //           ],
  //         },
  //         {
  //           type: "button",
  //           sub_type: "url",
  //           index: "0",
  //           parameters: [
  //             {
  //               type: "text",
  //               text: "",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   }),
  //   JSON.stringify(
  //     {
  //       messaging_product: "whatsapp",
  //       to: country + phoneNumber,
  //       type: "template",
  //       template: {
  //         name: "hello_world",
  //         language: {
  //           code: "en_US",
  //         },
  //       },
  //     },
  //     undefined,
  //     2
  //   ),
  //   JSON.stringify(
  //     {
  //       messaging_product: "whatsapp",
  //       recipient_type: "individual",
  //       to: "PHONE_NUMBER",
  //       type: "template",
  //       template: {
  //         name: "TEMPLATE_NAME",
  //         language: {
  //           code: "LANGUAGE_AND_LOCALE_CODE",
  //         },
  //         components: [
  //           {
  //             type: "header",
  //             parameters: [
  //               {
  //                 type: "image",
  //                 image: {
  //                   link: "http(s)://URL",
  //                 },
  //               },
  //             ],
  //           },
  //           {
  //             type: "body",
  //             parameters: [
  //               {
  //                 type: "text",
  //                 text: "TEXT_STRING",
  //               },
  //               {
  //                 type: "currency",
  //                 currency: {
  //                   fallback_value: "VALUE",
  //                   code: "USD",
  //                   amount_1000: "NUMBER",
  //                 },
  //               },
  //               {
  //                 type: "date_time",
  //                 date_time: {
  //                   fallback_value: "MONTH DAY, YEAR",
  //                 },
  //               },
  //             ],
  //           },
  //           {
  //             type: "button",
  //             sub_type: "quick_reply",
  //             index: "0",
  //             parameters: [
  //               {
  //                 type: "payload",
  //                 payload: "PAYLOAD",
  //               },
  //             ],
  //           },
  //           {
  //             type: "button",
  //             sub_type: "quick_reply",
  //             index: "1",
  //             parameters: [
  //               {
  //                 type: "payload",
  //                 payload: "PAYLOAD",
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     },
  //     undefined,
  //     2
  //   ),
  // ];

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: jsonfile,
    redirect: "follow",
  };

  const updateNumber = (q) => {
    setPhoneNumber(q.target.value);
    // raw[template].to = (q.target.value);
    console.log(q.target.value);
    // console.log(raw[template].to);
  };

  const updateCountryCode = (q) => {
    setCountry(q.target.value);
    console.log(q.target.value);
  };

  const updateTemplate = (q) => {
    setTemplate(q.target.value);
    console.log(q.target.value);
    setJSON((country, phoneNumber) =>
      JSON.stringify(raw[q.target.value], undefined, 2)
    );
  };

  const updateJSON = (q) => {
    setJSON(q.target.value);
    console.log(q.target.value);
  };

  // const uploadRaw = (q) => {
  //   setRaw([
  //     ...raw,
  //     {
  //       id: raw.length,
  //       value: jsonfile,
  //     },
  //   ]);
  //   console.log(jsonfile);
  //   console.log(raw);
  // };

  const submitHandler = (q) => {
    q.preventDefault();
    // for (i = 0; phoneNumber.length - 1 > 0; i=i+1) {

    fetch(
      "https://graph.facebook.com/v13.0/103110459173567/messages",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    //}
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          {/* <CountryDropdown value={country} onChange={setCountry} /> */}
          +
          <input
            type="text"
            className="country-code"
            value={country}
            onChange={updateCountryCode}
          />
          <input
            className="phone-input"
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={updateNumber}
          />
        </div>

        <div>
          <select
            className="template"
            name="template"
            value={template}
            onChange={updateTemplate}
          >
            <option value={0}>choose template</option>
            <option value={1}>hello_world</option>
            <option value={2}>message template</option>
          </select>
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="green"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>
          </button>
        </div>
      </form>
      <div className="JSON-upload">
        {
          <textarea
            className="JSON-data"
            name="jsonfile"
            cols="50"
            rows="7"
            minLength={10}
            value={jsonfile}
            onChange={updateJSON}
          ></textarea>
        }

        {/* <button type="submit" onClick={uploadRaw}>
          upload
        </button> */}
        <form />
        {/* <input type="text" className="params" placeholder="header" />
      <input type="text" className="params" placeholder="body" />
      <input type="text" className="params" placeholder="button" /> */}
      </div>
    </div>
  );
}

export default PostFunc;
