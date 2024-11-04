"use client";
import Image from "next/image";
import logo from "../public/images/logo.png";
import iphone from "../public/images/iphone.png";
import phoneDisplay from "../public/images/phone display.png";
import phone from "../public/images/phones.png";
import watch from "../public/images/watch.png";
import { useEffect, useState } from "react";

const images = [
  { image: logo, alt: "logo" },
  { image: phone, alt: "phone" },
  { image: watch, alt: "watch" },
  { image: phoneDisplay, alt: "phoneDisplay" },
  { image: iphone, alt: "iPhone" },
];

export default function SlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" z-0 mt-6  relative overflow-hidden flex justify-center items-center w-screen h-60 object-cover ">
      {images.map((slideImage, index) => (
        <div
          className={`absolute transition-opacity duration-500 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          key={index}
        >
          <Image
            src={slideImage.image}
            alt={slideImage.alt}
            width={800}
            height={800}
            className="object-cover "
          />
        </div>
      ))}
    </div>
  );
}