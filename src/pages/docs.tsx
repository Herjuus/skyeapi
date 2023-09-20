import React from "react";

type props = {
    message: string
}

export default function Docs(props: props){
    return(
        <main>
            <span>{props.message}</span>
        </main>
    )
}