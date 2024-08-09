'use client';
import "./breadcrumb_manufacture.css"
import React, {useEffect} from "react";
import { useRouter } from 'next/navigation';

export default function breadcrumb_manufacture(){

    const router = useRouter();

    const handleScrollTo = () => {
        router.push(`/`);
    };

    return(
            <ul className="breadcrumb">
                <li><a href="/">HOME</a></li>
                <li><a href="/">CH-GROUP</a></li>
                <li>MANUFACTURE</li>
            </ul>
    )
}