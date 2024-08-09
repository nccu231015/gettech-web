'use client'
import { builder } from '@builder.io/sdk';
import './EquipmentCard.css';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const EquipmentCard = (props) => {
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
                <div className='aboutImage'></div>
            </div>
        </div>
    );
}; 

export default EquipmentCard;