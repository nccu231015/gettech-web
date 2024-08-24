'use client'
import { builder } from '@builder.io/sdk';
import './EquipmentInfo.css';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const EquipmentInfo = ({cardList}) => {

    return(
        <div className='EquipmentInfoParent'>
            {/* <div className='EquipmentInfoTitle'>{EquipmentInfo.EquipmentInfoTitle}</div> */}
            <div className='EquipmentInfoCardContainer'>
                <div className='EquipmentInfoCardInnerContainer'>
                    {cardList.map((card, index) => (
                        <div key={index} className='EquipmentInfoCard'>
                            <div className='CardMainTitle'>{card.MainTitle}</div>
                            <div className='InfoContentParent'>
                                <div className='CardSubtitle'>BRAND</div>
                                <div className='CardInfoContent'>{card.brand}</div>
                                <div className='CardSubtitle'>MODEL NUMBER</div>
                                <div className='CardInfoContent'>{card.ModelNumber}</div>
                                <div className='CardSubtitle'>QUANTITY</div>
                                <div className='CardInfoContent'>{card.Quantity}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}; 

export default EquipmentInfo;