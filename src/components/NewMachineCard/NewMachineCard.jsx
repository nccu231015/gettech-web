'use client'
import { builder } from '@builder.io/sdk';
import './NewMachineCard.css';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const NewMachineCard = ({machineCardList}) => {
    {`machine card`+console.log(machineCardList)}
    return(
        <div className='machineCardContainer'>
            <div className='machineCardInnerContainer'>
                {machineCardList.map((machineCard, index) => (
                    <div key={index} className='mcc_machineCard'>
                        <div className='mcc_innerBox'>
                            <div className='mcc_title'>{machineCard.title}</div>
                            <div className='mcc_belowParent'>
                                <img className='mcc_machineImage' src={machineCard.image} alt='' />
                                <div className='mcc_description'>{machineCard.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}; 

export default NewMachineCard;