"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PhoneCaseDetails({ params }) {
    const { id } = params;
    const [phoneCase, setPhoneCase] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            (async () => {
                try {
                    const response = await fetch(`https://jsonserver.reactbd.com/phonecase/${id}`);
                    if (!response.ok) {
                        throw new Error("Fetching failed, try connection or API");
                    }
                    const phoneCaseData = await response.json();
                    setPhoneCase(phoneCaseData);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false); 
                }
            })();
        }
    }, [id]);
console.log(id)
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="mt-16">
            <div>
                <h1 className="text-3xl font-black border-b-stone-600  p-1 text-center">{phoneCase.title}</h1>
                { 
                    <div className="flex flex-col-2  justify-center items-center text-wrap text-stone-950">
                        
                        <div className=" w-fit ">
                        <Image className="object-cover -skew-x-6 "
                            src={phoneCase.image}
                            alt={phoneCase.title}
                            width={400}
                            height={400}
                            />

                        </div>
                        
                        <div className=" flex flex-col w-1/3 gap-5 justify-evenly items-center  ">
                            <h1 className="text-center text-2xl font-bold">{phoneCase.title}</h1>
                            <p className="text-cenetr">{phoneCase.brand} Phone</p>
                            <p className=" text-md font-serif leading-relaxed ml-5">
                                {phoneCase.description}</p>
                            <p className="flex justify-around gap-10 mt-3">
                            <p className="mt-3"> Prices: ${phoneCase.price}</p>
                           
                           <Link href={`/phoneCases`} className="right-0">
                               <button className="text-blue-900 mt-3  font-extrabold p-1 italic  rounded-xl  hover:text-blue-600 shadow-slate-800">
                                   More PhoneCase
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