import { useSpring, animated } from 'react-spring';

import React from "react";
import heroImage1 from '../assets/Rectangle 36.png';
import heroImage2 from '../assets/hero2.png';

export default function HeroSection() {
    const textSpringProps = useSpring({
        from: { opacity: 0, transform: 'translateY(-20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
    });

    const imageSpringProps = useSpring({
        from: { opacity: 0, transform: 'translateX(50%)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { duration: 1000 },
    });

    return (
        <div
            style={{
                backgroundImage: `url(${heroImage1}), url(${heroImage2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <section className="container items-center px-4 pb-12 mx-auto lg:flex md:px-40">
                <div className="flex-1 space-y-4 sm:text-center lg:text-left">
                    <animated.h1 className="text-xl font-bold text-white font-WorkSans mb-8 pt-8" style={{ ...textSpringProps, fontSize: "38px" }}>
                        Experience hassle-free and seamless last mile delivery solutions
                    </animated.h1>


                    <animated.p className="max-w-xl leading-relaxed text-gray-300 sm:mx-auto lg:ml-0" style={textSpringProps}>
                        Our platform allows you to search for gig drivers in real-time, allocate them multiple pickups and deliveries in a single trip.
                    </animated.p>

                    <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <a
                            href="javascript:void(0)"
                            className="block px-6 py-2 text-center text-white bg-blue-500 rounded-full font-Urbanist"
                        >
                            Request Demo
                        </a>
                    </div>
                </div>

                <animated.div style={imageSpringProps}>
                    <img
                        src={heroImage2}
                        className="w-full mx-auto sm:w-10/12 lg:w-full mt-16 mb-4"
                        style={{ width: '80%' }}
                    />
                </animated.div>
            </section>
        </div>
    );
}
