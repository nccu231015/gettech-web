'use client';
import "./breadcrumb_electronic.css"
import React, {useEffect} from "react";
import { useRouter } from 'next/navigation';

export default function breadcrumb_electronic(){

    const router = useRouter();

    const handleScrollTo = () => {
        router.push(`/`);
    };

    return(
            <ul className="breadcrumb">
                <li><a href="/">HOME</a></li>
                <li><a href="/">INDUSTRY</a></li>
                <li>ELECTRONIC</li>
            </ul>
    )
}