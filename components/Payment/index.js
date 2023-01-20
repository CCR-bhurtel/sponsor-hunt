/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Rolling from '../../assets/Images/loading.gif';
import * as validator from 'email-validator';

import {
    CardCvcElement,
    CardExpiryElement,
    CardNumberElement,
    ElementsConsumer,
    useElements,
    useStripe,
} from '@stripe/react-stripe-js';
import axios from 'axios';

function PaymentForm(props) {
    const [render, setRender] = useState(0);

    const stripe = useStripe();
    const elements = useElements();
    const [showCVC, setShowCVC] = useState(false);
    const [userData, setUserData] = useState({
        name: undefined,
        email: undefined,
        cardNumber: false,
        cardExpiry: false,
        cardCvc: false,
        postcode: '',
    });
    useEffect(() => {
        console.log(render);
    }, [render]);

    const [showLoading, setShowLoading] = useState(true);

    const { name, email, cardNumber, cardExpiry, cardCvc } = userData;

    const [activateButton, setActivateButton] = useState(false);

    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (name && email && cardNumber && cardExpiry && cardCvc) {
            setActivateButton(true);
        } else {
            setActivateButton(false);
        }
    }, [name, email, cardNumber, cardExpiry, cardCvc, userData]);

    const changeField = (e) => {
        switch (e.elementType) {
            case 'cardNumber':
                if (!cardExpiry) {
                    elements.getElement(CardExpiryElement).focus();
                } else if (!cardCvc) {
                    elements.getElement(CardCvcElement).focus();
                }
                break;
            case 'cardExpiry':
                if (!cardCvc) {
                    elements.getElement(CardCvcElement).focus();
                } else if (!cardExpiry) {
                    elements.getElement(CardExpiryElement).focus();
                }
                break;
            case 'cardCvc':
                if (!cardNumber) {
                    elements.getElement(CardNumberElement).focus();
                } else if (!cardExpiry) {
                    elements.getElement(CardExpiryElement).focus();
                }
            default:
                break;
        }
    };

    const onChangeHandler = (e, isCard) => {
        if (isCard) {
            if (e.complete) {
                changeField(e);
                setUserData({ ...userData, [e.elementType]: true });
            } else {
                setUserData({ ...userData, [e.elementType]: false });
            }
        } else if (e.target) {
            setUserData({
                ...userData,
                [e.target.name]: e.target.value,
            });
        }
    };
    const showCVCHandler = () => {
        setShowCVC(true);
    };
    const closeCVCHandler = () => {
        setShowCVC(false);
    };

    const donothing = (e) => {
        e.preventDefault();
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const card = elements.getElement(CardNumberElement);
        await stripe.createToken(card).then(async (result) => {
            if (result.error) {
                console.log('The error is', result.error);
                props.onError(result.error.message);

                setSubmitting(false);
            } else if (!validator.validate(userData.email)) {
                props.onError('Please pass in valid email');
            } else {
                axios
                    .post(`${process.env.NEXT_PUBLIC_BASE_URL}/pay`, {
                        body: JSON.stringify({
                            token: result.token.id,
                            email: userData.email,
                            name: userData.name,
                            plan_id: props.plan_id,
                        }),
                    })
                    .then((response) => {
                        props.closeModalHandler();
                    })
                    .catch((err) => {
                        console.log(err.response);
                        props.onError(
                            err.response
                                ? err.response.data.raw
                                    ? err.response.data.raw.message
                                    : 'Error 500'
                                : 'Error 500'
                        );
                    });
            }
        });
    };

    const CARD_OPTIONS = {
        style: {
            base: {
                width: '100%',
                color: 'rgb(107 114 128)',
                fontWeight: 500,
                outline: 'none',

                fontFamily: 'inherit',
                showIcon: true,
                '::placeholder': {
                    color: '#9799a3',
                },
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a',
            },
        },
    };
    const CARD_NUMBER_OPTIONS = {
        ...CARD_OPTIONS,
        placeholder: 'Card number',
        showIcon: true,
    };

    return (
        <div>
            <ElementsConsumer>
                {({ elements, stripe }) => {
                    return (
                        <>
                            <div
                                style={{
                                    display: showLoading ? 'block' : 'none',
                                    position: 'absolute',
                                    transform: 'translate(-50%, -50%)',

                                    top: '50%',
                                    left: '50%',
                                }}
                                className="loader"
                            >
                                <img src={Rolling.src} alt="Roller" />
                            </div>
                            <form
                                autoComplete="off"
                                id="payment-form"
                                className="w-full flex flex-col gap-1.5"
                                style={{ opacity: showLoading ? 0 : 1 }}
                            >
                                <div>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        onChange={(e) => onChangeHandler(e, false)}
                                        value={userData.name}
                                        autoComplete="off"
                                        required
                                        className="w-full h-[56px] px-[17px] rounded-lg  text-gray-500 border focus:border-gray-400 duration-300 outline-none"
                                        placeholder="Name"
                                    />
                                </div>
                                <div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={(e) => onChangeHandler(e, false)}
                                        value={userData.email}
                                        autoComplete="off"
                                        required
                                        className="w-full h-[56px] px-[17px] rounded-lg text-gray-500 border focus:border-gray-400 duration-300 outline-none"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="">
                                    <div className="relative w-full h-[56px] bg-white border focus:border-gray-400 rounded-lg">
                                        <div className="flex items-center absolute inset-y-0 left-3 right-3 gap-1 overflow-hidden">
                                            {/* <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 opacity-50"
              viewBox="0 0 512 512"
            >
              <path d="M32 376a56 56 0 0056 56h336a56 56 0 0056-56V222H32zm66-76a30 30 0 0130-30h48a30 30 0 0130 30v20a30 30 0 01-30 30h-48a30 30 0 01-30-30zM424 80H88a56 56 0 00-56 56v26h448v-26a56 56 0 00-56-56z" />
            </svg>
          </span> */}

                                            <CardNumberElement
                                                onFocus={closeCVCHandler}
                                                onChange={(e) => onChangeHandler(e, true)}
                                                onReady={(e) => {
                                                    setShowLoading(false);
                                                }}
                                                options={CARD_NUMBER_OPTIONS}
                                                name="cardNumber"
                                                className="w-full  text-md text-gray-500 outline-none"
                                            />

                                            <div
                                                onClick={showCVCHandler}
                                                className={`flex gap-2 ${
                                                    showCVC ? 'translate-x-0' : 'translate-x-14'
                                                } duration-300`}
                                            >
                                                <CardExpiryElement
                                                    onFocus={showCVCHandler}
                                                    onChange={(e) => onChangeHandler(e, true)}
                                                    name="expiryDate"
                                                    options={CARD_OPTIONS}
                                                    className="w-16 text-lg text-gray-500 text-center outline-none"
                                                />

                                                <CardCvcElement
                                                    options={CARD_OPTIONS}
                                                    onChange={(e) => onChangeHandler(e, true)}
                                                    name="cvc"
                                                    className="w-12 text-lg text-gray-500 text-center outline-none"
                                                />
                                            </div>

                                            {/* <input type="text" name="Card" placeholder="Card Number" /> */}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        onClick={activateButton ? handleSubmit : donothing}
                                        className={` w-full h-[54px] text-[17px] font-semibold bg-black ${
                                            submitting ? 'opacity-60' : activateButton ? 'cursor-pointer' : 'opacity-20'
                                        }

                 text-white flex justify-center items-center rounded-xl  mt-2`}
                                    >
                                        {submitting ? (
                                            <>
                                                <img src={Rolling.src} className="h-[80px]" />
                                            </>
                                        ) : (
                                            ` Pay $${props.price}`
                                        )}
                                    </button>
                                </div>
                            </form>
                        </>
                    );
                }}
            </ElementsConsumer>
        </div>
    );
}

export default React.memo(PaymentForm);
