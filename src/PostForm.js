import axios from "axios";
import React, { useEffect } from "react";

function PostForm() {
  useEffect(() => {
    Handler();
  }, []);

  let myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    "sso-key UzQxLikm_46KxDFnbjN7cQjmw6wocia:46L26ydpkwMaKZV6uVdDWe"
  );
  myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3000');
myHeaders.append('Access-Control-Allow-Credentials', 'true');


  
  let raw =
    '{\n  "consent": {\n    "agreedAt": "\'.date("2019-01-28\\08:30:23\\Z").\'",\n    "agreedBy": "192.168.1.25",\n    "agreementKeys": [\n      "DNRA"\n    ]\n  },\n  "contactAdmin": {\n    "addressMailing": {\n      "address1": "Lakshmi Nagar",\n      "address2": "Chennai",\n      "city": "Chennai",\n      "country": "IN",\n      "postalCode": "600118",\n      "state": "Tamil Nadu"\n    },\n    "email": "navinkrishna03@gmail.com",\n    "fax": "",\n    "jobTitle": "Developer",\n    "nameFirst": "Navin",\n    "nameLast": "Krishna",\n    "nameMiddle": "",\n    "organization": "Ghosha",\n    "phone": "+91 9941898996"\n  },\n  "contactBilling": {\n    "addressMailing": {\n      "address1": "Lakshmi Nagar",\n      "address2": "Chennai",\n      "city": "Chennai",\n      "country": "IN",\n      "postalCode": "600118",\n      "state": "Tamil Nadu"\n    },\n    "email": "navinkrishna03@gmail.com",\n    "fax": "",\n    "jobTitle": "Developer",\n    "nameFirst": "Navin",\n    "nameLast": "Krishna",\n    "nameMiddle": "",\n    "organization": "Ghosha",\n    "phone": "+91 9941898996"\n  },\n  "contactRegistrant": {\n    "addressMailing": {\n      "address1": "Lakshmi Nagar",\n      "address2": "Chennai",\n      "city": "Chennai",\n      "country": "IN",\n      "postalCode": "600118",\n      "state": "Tamil Nadu"\n    },\n    "email": "navinkrishna03@gmail.com",\n    "fax": "",\n    "jobTitle": "Developer",\n    "nameFirst": "Navin",\n    "nameLast": "Krishna",\n    "nameMiddle": "",\n    "organization": "Ghosha",\n    "phone": "+91 9941898996"\n  },\n  "contactTech": {\n    "addressMailing": {\n      "address1": "Lakshmi Nagar",\n      "address2": "Chennai",\n      "city": "Chennai",\n      "country": "IN",\n      "postalCode": "600118",\n      "state": "Tamil Nadu"\n    },\n    "email": "navinkrishna03@gmail.com",\n    "fax": "",\n    "jobTitle": "Developer",\n    "nameFirst": "Navin",\n    "nameLast": "Krishna",\n    "nameMiddle": "",\n    "organization": "Ghosha",\n    "phone": "+91 9941898996"\n  },\n  "domain": [\n      "domains.com"\n  ],\n  "nameServers": [\n    "ns50.domaincontrol.com",\n    "ns60.domaincontrol.com"\n  ],\n  "period": 1,\n  "privacy": false,\n  "renewAuto": true\n}';

  var requestOptions = {
    mode: 'no-cors',
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const Handler = () => {
    fetch("https://api.ote-godaddy.com/v1/domains/purchase", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error:", error));
  };

  return (
    <div>
      <form >
        <div>
          <input
            type="number"
            name="phoneNumber"
            value={0}
          />
        </div>
        <div>
          <select name="template" >
            <option value="hello_world"></option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default PostForm;
