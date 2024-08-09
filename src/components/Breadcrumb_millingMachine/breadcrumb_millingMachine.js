'use client';
import "./breadcrumb_millingMachine.css"
import React, {useEffect} from "react";
import { useRouter } from 'next/navigation';

export default function breadcrumb_millingMachine(){

    const router = useRouter();

    const handleScrollTo = () => {
        router.push(`/`);
    };

    return(
            <ul className="breadcrumb">
                <li><a href="/">HOME</a></li>
                <li><a href="/">CNC EXPERT</a></li>
                <li>MILLING MACHINE</li>
            </ul>
    )
}