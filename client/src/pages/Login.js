import React, { Component } from "react";
import {Input, Button} from 'antd';

class Login extends Component {

    render() {
        return (
            <div id="page-flex">
                <div id='header'>服务人员管理系统</div>
                <div id='welcome'>
                    <div id='banner'>欢迎光临香蜜至家人员管理系统！</div>
                    <div>登录或创建一个账号</div>
                    <div>客户可以在香蜜至家小程序中与我们的人员取得联系</div>
                </div>
                <div id='login'>
                    <Input className='input' />
                    <Input className='input' />
                </div>
            </div>
        );
    }
}

export default Login;