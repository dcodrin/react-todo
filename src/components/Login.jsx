import React from 'react';

import {connect} from 'react-redux';
import {startLogin} from 'actions';

export class Login extends React.Component {
    constructor() {
        super();
        this.state = {};
        
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(){
        const {dispatch} = this.props;

        dispatch(startLogin());
    }

    render() {
        return (
            <div>
                <h1 className="page-title">React Todo</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-8 large-5">
                        <div className="callout callout-auth">
                            <h3>Login</h3>
                            <button onClick={this.handleLogin} className="button">Login With GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Login);