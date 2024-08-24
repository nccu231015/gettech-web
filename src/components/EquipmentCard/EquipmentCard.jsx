'use client'
import { builder } from '@builder.io/sdk';
import { useState, useCallback } from "react";
import './EquipmentCard.css';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const EquipmentCard = ({equipmentCardList = []}) => {

    const [isCheckedCard, setCheckedStates] = useState(() =>
        equipmentCardList.reduce((acc, _, index) => ({ ...acc, [index]: false }), {})
    );

    const handleToggleCard = useCallback((index) => {
        console.log(`Card ${index} clicked`);
        setCheckedStates(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    }, []);

    // {`equipment card`+console.log(props)}
    return(
        <div className='equipmentCardParent'>
            <div className='equipmentCardContainer'>
                {equipmentCardList.map((equipmentCard, index) => (
                    <div key={index} className='equipmentCard'>
                        <div className='titleContainer'>
                            <div className='titleText'>
                                {equipmentCard.titleText}
                            </div>
                        </div>
                        <div className='cardImageContainer'>
                            <img className='cardImage' src={equipmentCard.image} alt='cardImage' />
                            <input type="checkbox" checked={isCheckedCard[index]} onChange={() => handleToggleCard(index)} />
                            <div className='aboutImage' onClick={() => handleToggleCard(index)}></div>
                            <input type="checkbox" checked={isCheckedCard[index]} onChange={() => handleToggleCard(index)} />
                            <div className='detailCardContainer'>
                                <div className='redTitle'>BRAND</div>
                                <div className='whiteContent'>{equipmentCard.brand}</div>
                                <div className='redTitle'>MODEL NUMBER</div>
                                <div className='whiteContent'>{equipmentCard.model_number}</div>
                                <div className='redTitle'>QUANTITY</div>
                                <div className='whiteContent'>{equipmentCard.quantity}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}; 

export default EquipmentCard;