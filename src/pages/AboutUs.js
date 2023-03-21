import React from "react";
import aboutus from '../assets/aboutussection.jpg';
import { Link } from "react-router-dom";
import chatimage from '../assets/chat.png';

const AboutUs = () => {
    return (
        <div>
        <section className="bg-white py-12 mb-32">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">About Us</h2>
                    <div className="h-1 w-20 bg-blue-500 rounded"></div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                        <img
                            src={aboutus}
                            alt="About Us"
                            className="w-full h-auto object-cover object-center rounded-lg shadow-md"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Our Story
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                            eros suscipit, sagittis felis eu, vestibulum augue. Vivamus vel
                            mauris id velit malesuada imperdiet vel ut magna. Nullam ac
                            vulputate mauris, sit amet pretium augue.
                        </p>
                        <p className="text-gray-700">
                            Nam auctor nisi ut ipsum malesuada, id fermentum leo consequat.
                            Nunc eu dui blandit, dignissim elit vel, congue orci. Suspendisse
                            vitae ipsum eget justo commodo rhoncus.
                        </p>
                    </div>
                </div>
            </div>
        </section>
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
        </div>
    );
};

export default AboutUs;
