'use client'
import { builder } from '@builder.io/sdk';
import './EquipmentInfo.css';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const EquipmentInfo = ({cardList}) => {

    return(
        <div className='EquipmentInfoParent'>
            <div className='EquipmentInfoTitle'></div>
            <div className='EquipmentInfoCardContainer'>
                {cardList.map((card, index) => (
                    <div key={index} className='EquipmentInfoCard'>
                        <div className='CardMainTitle'>{card.MainTitle}</div>
                        <div className='CardBrand'>{card.brand}</div>
                        <div className='CardModelNumber'>{card.ModelNumber}</div>
                        <div className='CardQuantity'>{card.Quantity}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}; 

export default EquipmentInfo;