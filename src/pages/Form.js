import React from 'react';
import { useSpring, animated } from 'react-spring';
import chatimage from '../assets/chat.png';
import { Link } from "react-router-dom";

export default function Form() {
    const textSpringProps = useSpring({
        from: { opacity: 0, transform: 'translateY(-20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
    });

    const textSpringProps1 = useSpring({
        from: { opacity: 0, transform: 'translateX(50%)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { duration: 1000 },
    });

    return (
        <>
            <>
                {/* component */}
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')"
                    }}
                />
                <div className="min-w-screen min-h-screen bg-white flex items-center justify-center px-5 py-5">
                    <div
                        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
                        style={{ maxWidth: 1000 }}
                    >
                        <div className="md:flex w-full">
                            <div className="hidden md:block w-1/2 bg-black py-10 px-10">

                                <animated.h1 className="text-xl font-bold text-white font-WorkSans mb-8 pt-8 my-8" style={{ ...textSpringProps, fontSize: "38px" }}>
                                    Upwork
                                </animated.h1>


                                <animated.p className="max-w-xl leading-relaxed text-gray-300 sm:mx-auto lg:ml-0" style={{ ...textSpringProps1, fontSize: "18px" }}>
                                    Experience hassle-free and seamless last mile delivery solutions. Our platform allows you to search for gig drivers in real-time, allocate them multiple pickups and deliveries in a single trip.
                                </animated.p>
                            </div>
                            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                                <div className="text-center mb-10">
                                    <h1 className="font-bold text-3xl text-gray-900 font-WorkSans">REGISTER</h1>
                                    <p className='font-WorkSans'>Enter your information to register</p>
                                </div>
                                <div>
                                    <div className="flex -mx-3">
                                        <div className="w-1/2 px-3 mb-5">
                                            <label htmlFor="" className="text-xs font-semibold px-1 font-WorkSans">
                                                First name
                                            </label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                                                </div>
                                                <input
                                                    type="text"
                                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                    placeholder="John"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-3 mb-5 font-WorkSans">
                                            <label htmlFor="" className="text-xs font-semibold px-1">
                                                Last name
                                            </label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                                                </div>
                                                <input
                                                    type="text"
                                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5 font-WorkSans">
                                            <label htmlFor="" className="text-xs font-semibold px-1">
                                                Email
                                            </label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                                                </div>
                                                <input
                                                    type="email"
                                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                    placeholder="email@example.com"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-12 font-WorkSans">
                                            <label htmlFor="" className="text-xs font-semibold px-1">
                                                Password
                                            </label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                    <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                                                </div>
                                                <input
                                                    type="password"
                                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                    placeholder="************"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-5">
                                            <button className="block w-full max-w-xs mx-auto bg-black hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-Urbanist">
                                                REGISTER NOW
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <Link
                        to="/ContactUs"
                        title="Contact us"
                        className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
                    >
                        <img
                            className="object-cover object-center "
                            src={chatimage}
                            width="80%"
                            height="80%"
                        />
                    </Link>
                </div>
            </div>
            </>

        </>

    );
}
