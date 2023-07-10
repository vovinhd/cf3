"use client";

import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";


export const Greeting = (props: { data: string | null | undefined}) => {

    return(
        <>
        
            <div>
                <h1 className="text-4xl text-slate-900">
                    {props.data}
                </h1>
            </div>
        </>
    )
}