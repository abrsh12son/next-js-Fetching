"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Phone() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://jsonserver.reactbd.com/phone");
        if (!response.ok) {
          throw new Error("fatching failed,try conection or Api");
        }
        const PhoneData = await response.json();
        setPhones(PhoneData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  if (loading)
    return (
      <div className="text-center mt-32 text-4xl font-black">loading..</div>
    );
  if (error)
    return (
      <div className="text-center mt-32 text-4xl font-black">
        Error:{error.message}
      </div>
    );
  return (
    <div className=" min-h-screen p-8  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <h1 className="text-3xl font-black text-center underline-offset-2 ">
          Get your favorite phone
        </h1>

        <ul className="grid grid-cols-4 gap-4  mt-8 justify-center items-cente ">
          {phones.map((phone) => (
            <li
              className=" border-4 border-gray-200 hover:border-gray-300/80 hover:bg-stone-200/40 "
              key={phone._id}
            >
              <Link href={`/phone/${phone._id}`}>
                <Image
                  className="object-cover"
                  src={phone.image}
                  alt={phone.title}
                  width={800}
                  height={800}
                />
                <div className="text-center flex flex-col gap-3">
                  <h1>{phone.title}</h1>
                  <p> ${phone.price}</p>
                  <p className="text-blue-700 p-1 hover:text-blue-500  hover:animate-pulse ">
                    See Detailes
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
