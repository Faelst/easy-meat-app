import React from "react";
import Titulo from "./Titulo";

interface LayoutProps {
    titulo: string;
    children: any;
}

export default function Layout(props: LayoutProps) {
    return (
        <div className= {` w-full
        flex  flex-col w-4/5 bg-white text-gray-800 rounded-md
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-5">
            {props.children}
            </div>

        </div>
    )

}