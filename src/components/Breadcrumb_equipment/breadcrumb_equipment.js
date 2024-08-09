'use client';
import "./breadcrumb_equipment.css"
import React, {useEffect} from "react";
import { useRouter } from 'next/navigation';

export default function breadcrumb_equipment(){

    const router = useRouter();

    const handleScrollTo = () => {
        router.push(`/`);
    };

    return(
            <ul className="breadcrumb">
                <li><a href="/">HOME</a></li>
                <li><a href="/">EQUIPMENT</a></li>
                <li>CNC MACHINING EQUIPMENT & MEASURING INSTRUMENTS</li>
            </ul>
    )
}