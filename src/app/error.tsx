"use client";
interface ErrorPageProps {
    error:Error;
    reset:()=>void
}
import { useEffect } from "react";

export default function Error({error,reset}:ErrorPageProps){
    useEffect(()=>{
        console.log(error)
    },[error]);
    return(
        <div className="text-center mt-10">
            <h1>Spmethng went wrong. Please try again later.</h1>
            <button className="hover:text-amber-600" onClick={()=>reset()}>
                Try Again
            </button>
        </div>
    )
}