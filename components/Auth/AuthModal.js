import React, { Fragment, useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import { Transition, Dialog } from '@headlessui/react';

function AuthModal({ isModalOpen = false, closeModalHandler, formType = 'input', changeFormHandler }) {
    const [error, setError] = useState();
    const signup = (name, email, password, confirmPassword) => {
        // signup actions
    };
    const login = (email, password) => {
        // login actions
    };
    return (
        <Transition show={isModalOpen} as={Fragment}>
            <Dialog onClose={closeModalHandler}>
                {/* className="relative z-50" */}
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <Transition.Child
                    as={'div'}
                    show={true}
                    // enter="ease-out duration-300"
                    // enterFrom="opacity-0"
                    // enterTo="opacity-100"
                    // leave="ease-in duration-200"
                    // leaveFrom="opacity-100"
                    // leaveTo="opacity-0"
                >
                    <div className="fixed inset-0  bg-black backdrop-blur-md bg-opacity-30" aria-hidden="true" />
                </Transition.Child>

                {/* Full-screen container to center the panel */}

                <Transition.Child
                    as={Fragment}
                    // enter="ease duration-200"
                    // enterFrom="translate-y-full opacity-0"
                    // enterTo="translate-y-0 opacity-100"
                    // leave="ease-out duration-200"
                    // leaveFrom="translate-y-0 opacity-100"
                    show={true}
                    // leaveTo="translate-y-full opacity-0"
                >
                    <div className={`fixed inset-0 flex items-end sm:items-center justify-center sm:p-4`}>
                        <Dialog.Panel className="sm:max-w-sm bg-white w-full sm:w-[390px] mx-auto p-4 backdrop-blur-lg bg-white/80 rounded-xl">
                            <div className="fixed">
                                <div
                                    onClick={closeModalHandler}
                                    className="bg-white w-8 h-8 flex justify-center items-center rounded-full cursor-pointer"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="32"
                                            d="M368 368L144 144M368 144L144 368"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                {formType == 'login' ? (
                                    <Login login={login} error={error} changeFormHandler={changeFormHandler} />
                                ) : (
                                    <Signup signup={signup} error={error} changeFormHandler={changeFormHandler} />
                                )}
                            </div>
                        </Dialog.Panel>
                    </div>
                </Transition.Child>

                {/* The actual dialog panel  */}
            </Dialog>
        </Transition>
    );
}

export default AuthModal;
