"use client";

import { Span } from "next/dist/trace";
import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";
// import {experimental_useFormStatus as useFormStatus} from "react-dom"
// import {experimental_useFormStatus as useFormStatus} from "react-dom"



type FormSubmitButtonProps={
    children:React.ReactNode,
    className?:string,
} & ComponentProps<'button'>
export default function FormSubmitButton(
    {children,className,...props}:FormSubmitButtonProps 
){
    const {pending} = useFormStatus()
    return(
        <button {...props} className={`btn btn-primary ${className}`} type="submit" disabled={pending} >{children} {pending && <span className="loading loading-spinner"></span>}</button>
    )
}