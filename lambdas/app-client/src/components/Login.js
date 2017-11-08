import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const style = {
    
}

export default class Login extends React.Component {
    login() {
        console.log('username', document.getElementById('username'));
        console.log('password', document.getElementById('password'));
    }

    render() {
        return (
            <div className='login-screen'>
            <Paper zDepth={1}>
                <TextField id='username' hintText="Username"/><br />
                <TextField id='password' hintText="Password" type='password'/><br/>
                <RaisedButton label="Login" primary={true} style={style} onClick={this.login.bind(this)}/>
                <br />
                <br />
            </Paper>
        </div>
        );
    }
}