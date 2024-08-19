'use client'
import { builder } from '@builder.io/sdk';
import { useState } from "react";
import './EquipmentCard.css';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const EquipmentCard = (props) => {

    const [isCheckedCard, setIsCheckedCard] = useState(false);

    const handleToggleCard = () => {
        setIsCheckedCard(prev => !prev);
    };

    {`equipment card`+console.log(props)}
    return(
        <div className='equipmentCard'>
            <div className='titleContainer'>
                <div className='titleText'>
                    {props.titleText}
                </div>
            </div>
            <div className='cardImageContainer'>
                <img className='cardImage' src={props.image} alt='cardImage' />
                <input type="checkbox" checked={isCheckedCard} id="Card" onChange={handleToggleCard} />
                <div className='aboutImage' onClick={handleToggleCard}></div>
                <input type="checkbox" checked={isCheckedCard} id="Card" onChange={handleToggleCard} />
                <div className='detailCardContainer'>
                    <div className='redTitle'>BRAND</div>
                    <div className='whiteContent'>{props.brand}</div>
                    <div className='redTitle'>MODEL NUMBER</div>
                    <div className='whiteContent'>{props.model_number}</div>
                    <div className='redTitle'>QUANTITY</div>
                    <div className='whiteContent'>{props.quantity}</div>
                </div>
            </div>
        </div>
    );
}; 

export default EquipmentCard;