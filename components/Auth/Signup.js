import React, { useState } from 'react';
import InputField from './InputField';
import google from '../../assets/Icons/google.png';

function Signup({ changeFormHandler }) {
    const [signupData, setsignupData] = useState({ email: '', password: '', confirmPassword: '' });
    const onChange = (e) => {
        setsignupData({ ...signupData, [e.target.name]: e.target.value });
    };
    return (
        <div className="flex items-center flex-col pb-[1rem]">
            <h2 className="gradient-text text-[2rem]">Signup</h2>
            <div className="form-groups w-[90%] md:w-[80%]">
                <InputField
                    type="email"
                    name="email"
                    placeholder="Email"
                    id="email"
                    onChange={onChange}
                    value={signupData.email}
                />
                <InputField
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                    onChange={onChange}
                    value={signupData.password}
                />
                <InputField
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    id="confirmPassword"
                    onChange={onChange}
                    value={signupData.password}
                />
                <button className="mt-6 p-4 gradient-bg btn-primary w-[100%]">Submit</button>
            </div>
            <p className="mt-4">
                Already have an account?{' '}
                <span
                    onClick={() => {
                        changeFormHandler('login');
                    }}
                    className="gradient-text cursor-pointer"
                >
                    Login
                </span>
            </p>
            <p className="mt-2">OR</p>
            <div className="group mt-4  flex flex-row gap-4 bg-Iron w-[90%] md:w-[80%] items-center justify-center p-2 cursor-pointer group hover:bg-Orch rounded-md">
                <div>
                    <img className="w-[30px] h-[30px]" src={google.src} alt="google icon" />
                </div>
                <div className="group-hover:text-white">Signup with google</div>
            </div>
        </div>
    );
}

export default Signup;
