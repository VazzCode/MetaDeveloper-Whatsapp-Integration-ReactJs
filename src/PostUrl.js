import React, { Component } from 'react'
import axios from 'axios'

export class PostUrl extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        axios:require('axios'),
        data :JSON.stringify({
          "messaging_product": "whatsapp",
          "to": "{{Recipient-Phone-Number}}",
          "type": "template",
          "template": {
            "name": "hello_world",
            "language": {
              "code": "en_US"
            }
          }
        }),
        
        config :{
          method: 'post',
          url: 'https://graph.facebook.com/{{Version}}/{{Phone-Number-ID}}/messages',
          headers: { 
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer EAAIvl6h6jIQBAKgCZBXSl2UcK8RNZAfYAY0xrxB3JAejwzLQBNQhW6ZCipEb5CfgZC2Xbi6ahFkTs2HZAeZCSao2RAoHMQeOJm2Ts538JhuZBOqsVFQShfvMkaZBPtV9z1I5hbziyz8g1IFJ8GXd0z7ARodhsagGKTIHyLVz2QBL4i0qpfKDOywhXOca6qeqyLXWo4aFzkfmUQZDZD'
          },
            data: this.data
        }
      }
    }

    submitHandler = (q) => {
        q.preventDefault()
        axios(this.config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
})
      }

    







  render() {
    return (
        <div>
            <form onSubmit={this.submitHandler}>
                <button type='submit'>submit</button>
            </form>
      </div>
    )
  }
}

export default PostUrl