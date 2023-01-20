import React, { useState, Fragment } from 'react';
import SectionTitle from '../SectionTitle';
import tick from '../../assets/Icons/tick.png';
import cross from '../../assets/Icons/cross.png';
import PrimaryButton from '../Button';
import { Transition, Dialog } from '@headlessui/react';
import Payment from '../Payment';

function Plan({ details: { plan_id, name, desc, features, price } }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFormError, setIsFormError] = useState(false);
    const [formError, setFormError] = useState(null);
    const [isModalFormOpen, setIsModalFormOpen] = useState(true);

    const closeModalHandler = () => {
        setIsModalOpen(false);
        setIsFormError(false);
    };
    const modalOpenHandler = () => {
        //waiting for confetti
        setTimeout(() => {
            setIsModalOpen(true);
        }, 400);
    };
    const controlErrorHandler = (error) => {
        setFormError(error);
        setIsFormError(true);
    };
    return (
        <div
            className={`${
                name === 'Beginner' ? 'bg-Lotion border-[1px]' : 'gradient-bg-card'
            }  border-Iron  rounded-xl p-4 `}
        >
            <Transition show={isModalOpen} as={Fragment}>
                <Dialog onClose={closeModalHandler}>
                    {/* className="relative z-50" */}
                    {/* The backdrop, rendered as a fixed sibling to the panel container */}
                    <Transition.Child
                        as={'div'}
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
                                    {isFormError ? (
                                        <div className="text-red-500 py-12 px-6">
                                            <h2 className="text-xl xxl:text-2xl font-bold">Something Went Wrong</h2>
                                            <h6 className="text-base xxl:text-lg mt-4">ERROR: {formError} </h6>
                                        </div>
                                    ) : (
                                        <>
                                            <div>
                                                <h2 className="text-3xl sm:text-[35px] font-semibold gradient-text">${price}</h2>
                                                <h3 className="text-lg sm:text-[20px] font-medium mt-2">{name} plan</h3>
                                            </div>
                                            <Transition
                                                show={isModalFormOpen}
                                                as={'div'}
                                                // enter="transition ease duration-500 transform opacity-0"
                                                // enterFrom="-translate-y-0"
                                                // enterTo="translate-y-auto opacity-100"
                                                // leave="transition ease duration-500 transform"
                                                // leaveFrom="translate-y-auto"
                                                // leaveTo="translate-y-0 opacity-0"
                                            >
                                                <Payment
                                                    onError={controlErrorHandler}
                                                    plan_id={plan_id}
                                                    price={price}
                                                    closeModalHandler={closeModalHandler}
                                                />
                                            </Transition>
                                        </>
                                    )}
                                </div>
                            </Dialog.Panel>
                        </div>
                    </Transition.Child>

                    {/* The actual dialog panel  */}
                </Dialog>
            </Transition>
            <SectionTitle text={name} />
            <p className="font-medium text-Orch text-[1rem] leading-tight tracking-tight mt-2 max-w-[15rem]">{desc}</p>
            <p className="price font-medium my-4">
                $<span className="font-semibold text-[1.7rem]">{price}</span>/month
            </p>
            <div className="mt-6 min-h-[9rem]">
                {features.map((feature) => {
                    return (
                        <div className="flex flex-row items-center justify-start mb-4">
                            <img className="w-[17px]" src={feature.available ? tick.src : cross.src} alt="" />
                            <p className="font-medium ml-2">{feature.key}</p>
                        </div>
                    );
                })}
            </div>
            <div className="my-6" onClick={price ? modalOpenHandler : (e) => {}}>
                <PrimaryButton text={'Get brand deals'} />
            </div>
        </div>
    );
}

export default React.memo(Plan);
