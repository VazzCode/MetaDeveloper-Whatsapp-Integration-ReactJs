import React from 'react'
import './App.css';

function TextArea({ jsonfile, setJson }) {
    
    const updateJSON = (q) => {
        setJson(q.target.value);
        console.log(q.target.value);
        //console.log(raw);
      };

  return (
      <div>
          <form className="JSON-upload">
              <textarea className="JSON-data" name="jsonfile" cols="30" rows="10" value={jsonfile} onChange={updateJSON} minLength={10}></textarea>
          </form>
    </div>
  )
}

export default TextArea