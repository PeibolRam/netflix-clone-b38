import React from "react";
import Layout from "../components/Layout";
import { Link } from 'react-router-dom'
import '../styles/login.css'

function Login() {
  
    return (
        <Layout>
            <div className="login-container">
                <div className="login-container-b">
                    <div className="login-box">   
                        <h1>Login</h1>
                        <form onSubmit="" name="sentMessage" id="contactForm" novalidate>
                            <div class="control-group">
                                <label>Email</label>
                                <input
                                type="email"
                                class="form-control"
                                placeholder="Email"
                                name="email"
                                required
                                />
                            </div>
                            <div class="control-group">
                                <label>Password</label>
                                <input
                                type="password"
                                class="form-control"
                                placeholder="Password"
                                name="password"
                                required
                                />
                            </div>
                            <div class="form-group">
                                <Link to="/browse" class="redButton">
                                    Login
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Login;