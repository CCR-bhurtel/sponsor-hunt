import React, { useState } from 'react';
import PrimaryButton from '../Button';
import InputField from './InputField';
import google from '../../assets/Icons/google.png';

function Login({ changeFormHandler }) {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const onChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };
    return (
        <div className="flex items-center flex-col pb-[1rem]">
            <h2 className="gradient-text text-[2rem]">Login</h2>
            <div className="form-groups w-[80%]">
                <InputField
                    type="email"
                    name="email"
                    placeholder="Email"
                    id="email"
                    onChange={onChange}
                    value={loginData.email}
                />
                <InputField
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                    onChange={onChange}
                    value={loginData.password}
                />
                <button className="mt-6 p-4 gradient-bg btn-primary w-[100%]">Submit</button>
            </div>
            <p className="mt-4">
                Don't have an account?{' '}
                <span
                    onClick={() => {
                        changeFormHandler('signup');
                    }}
                    className="gradient-text cursor-pointer"
                >
                    Signup
                </span>
            </p>
            <p className="mt-2">OR</p>
            <div className="group mt-4  flex flex-row gap-4 bg-Iron w-[70%] items-center justify-center p-2 cursor-pointer group hover:bg-Orch rounded-md">
                <div>
                    <img className="w-[30px] h-[30px]" src={google.src} alt="google icon" />
                </div>
                <div className="group-hover:text-white">Login with google</div>
            </div>
        </div>
    );
}

export default Login;
