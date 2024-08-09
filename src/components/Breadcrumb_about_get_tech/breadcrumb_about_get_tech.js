'use client';
import "./breadcrumb_about_get_tech.css"
import React, {useEffect} from "react";
import { useRouter } from 'next/navigation';

export default function Breadcrumb_about_get_tech(){

    const router = useRouter();

    const handleScrollTo = () => {
        router.push(`/`);
    };

    return(
            <ul className="breadcrumb">
                <li><a href="/">HOME</a></li>
                <li><a href="/">ABOUT GET-TECH</a></li>
                <li>GET-TECH : INNOVATING THE FUTURE OF MANUFACTURING</li>
            </ul>
    )
}