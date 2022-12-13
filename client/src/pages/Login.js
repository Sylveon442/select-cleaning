import React, { Component } from "react";
import {Input, Button} from 'antd';

class Login extends Component {

    async sendCode() {
        console.log('test');
        this.setState({timeout: 30, codeEnabled: false})
        while(this.state.timeout > 0){
            await new Promise( res => setTimeout(res, 1000) );
            this.setState({timeout: this.state.timeout - 1})
            this.setState({codeText: this.state.timeout})
        }
        this.setState({'codeText': 'Send Again', codeEnabled: true})
    }

    constructor(props) {
        super(props);
        this.state = {
            codeText: 'Send Verification Code',
            timeout: 30,
            codeEnabled: true,
            phone:'',
            code:'',
        }
    }

    render() {
        return (
            <div id="page-flex">
                <div id='header'>Azalea CleanMS</div>
                <div id='welcome'>
                    <div id='banner'>Welcome to Azalea CleanMS!</div>
                    <div>Login or create an account</div>
                    <div>Customers can contact your appointed servicing agent on 
                        <a href='https://t.me/minami1118'> Telegram</a>
                    </div>
                </div>
                <div id='login'>
                    <Input
                     className='input' 
                     placeholder="Mobile Number"
                     value={this.state.phone}
                     onChange={(e) => this.setState({phone: e.target.value})} />
                    <Input.Group compact>
                        <Input 
                        id="input-with-code" 
                        placeholder="Verification Code"
                        value={this.state.code}
                        onChange={(e) => this.setState({code: e.target.value})}/>
                        <Button
                         className="button"
                         onClick={() => this.sendCode()} 
                         disabled={!this.state.codeEnabled}
                         > {this.state.codeText}</Button>
                    </Input.Group>
                </div>
                <div id='buttons'>
                    <Button className="button" type='primary'>Login</Button>
                    <Button className="button">Register</Button>
                </div>
            </div>
        );
    }
}

export default Login;