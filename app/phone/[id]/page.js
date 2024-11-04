"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PhoneDetails({ params }) {
    const { id } = params;
    const [phone, setPhone] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            (async () => {
                try {
                    const response = await fetch(`https://jsonserver.reactbd.com/phone/${id}`);
                    if (!response.ok) {
                        throw new Error("Fetching failed, try connection or API");
                    }
                    const phoneData = await response.json();
                    setPhone(phoneData);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false); // Set loading to false when done
                }
            })();
        }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="mt-24 ">
            <div>
                <h1 className="text-3xl font-black border-b-stone-600 text-center">{phone.title}</h1>
                { 
                    <div className="flex flex-col-2  justify-center items-center text-wrap mt-10 text-stone-950">
                        
                        <div className=" w-fit ">
                        <Image className="object-cover -skew-x-6 "
                            src={phone.image}
                            alt={phone.title}
                            width={400}
                            height={600}
                            />

                        </div>
                        
                        <div className=" flex flex-col w-1/3 gap-5 justify-evenly items-center  ">
                            <h1 className="text-center text-2xl font-bold">{phone.title}</h1>
                            <p className="text-cenetr">{phone.brand} Phone</p>
                            <p className=" text-md font-serif leading-relaxed ml-5">
                                {phone.description}</p>
                            <p className="flex justify-around gap-10 mt-3">
                            <p className="mt-3"> Prices: ${phone.price}</p>
                           
                           <Link href={`/phone`} className="right-0">
                               <button className="text-blue-900 mt-3  font-extrabold p-1 italic  rounded-xl  hover:text-blue-600 shadow-slate-800">
                                   More Phones
                               </button>   
                                   </Link>
                    </p>
                         
                       </div>
                    </div>
                }
            </div>
        </div>
    );
}