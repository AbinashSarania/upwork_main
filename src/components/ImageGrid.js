import React from 'react';

import myImage1 from '../assets/Rectangle1.png';
import myImage2 from '../assets/Rectangle2.png';
import myImage3 from '../assets/Rectangle3.png';
import myImage4 from '../assets/Rectangle4.png';
import myImage5 from '../assets/Rectangle5.png';

export default function ImageGrid() {
  const posts = [
    {
      title: "Services we're offering...",
      content: "Here the list of features you'll get by using our delivery solutions",
      className: "bg-red-200 py-8 my-8 ",
      isTextOnly: true
    },
    {
      title: "Real-time GIg Driver Search",
      img: myImage1,
      content:
        "Our platform allows you to search for gig drivers in real-time, based on their location, availability, and other relevant factors.",
      className: "",
    },
    {
      title: "Multiple-pickup and delivery",
      img: myImage2,
      content:
        "you can allocate multiple pickups and deliveries to a single gig driver, which can help you save time and money.",
    },
    {
      title: "Optimized Route Planning",
      img: myImage3,
      content:
        "Our AI-based route optimization system helps gig drivers plan their route in the most efficient way possible, saving time and reducing transportation costs.",
    },
    {
      title: "Dynamic Rate & Promotions",
      img: myImage4,
      content:
        "Our platform features a dynamic rate and promotion system that enables you to set flexible pricing based on demand and supply.",
    },
    {
      title: "Customer Support",
      img: myImage5,
      content:
        "Our customer support team is available 24/7 to assist you with any questions or concerns you may have.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center mt-32 mb-32">
      <div className="grid grid-cols-1 justify-center md:grid-cols-3 gap-0 mx-8">
        {posts.map((item, key) => (
          <div className={`w-full lg:max-w-xs ${item.className}`} key={key}>
            <div className="p-4">
              <h4 className={`text-2xl font-semibold text-black text-center h-0 mb-8 ${key === 0 ? 'font-bold font-WorkSans text-xl mt-16' : ''}`}>
                {item.title}
              </h4>
            </div>
            {item.isTextOnly ? (
              <p className={`p-4 text-justify md:text-center sm:text-sm sm:leading-snug md:leading-relaxed lg:leading-relaxed ${key === 0 ? 'text-lg mt-2 mb-8' : ''}`}>
                {item.content}
              </p>
            ) : (
              <div className="relative overflow-hidden h-48">
                <img
                  className="object-cover absolute inset-0 w-full h-full mx-auto"
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                  src={item.img}
                  alt="image"
                />
              </div>
            )}
            {!item.isTextOnly && (
              <p className="p-4 text-justify  sm:text-sm sm:leading-snug md:leading-relaxed lg:leading-relaxed font-WorkSans">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
