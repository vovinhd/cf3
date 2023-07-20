"use client";

import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { Post } from "../db";


export const PostsList = (props: { data: Post[]}) => {

    return(
        <>
        
            <div>
                <h1 className=" text-slate-900">
                    {JSON.stringify(props.data)}
                </h1>
            </div>
        </>
    )
}