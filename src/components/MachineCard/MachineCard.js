'use client'
import { builder } from '@builder.io/sdk';
import './MachineCard.css';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const MachineCard = (props) => {
    return(
        <div className='machineCard'>
            <div className='innerBox'>
                <div className='title'>
                    <div className='titleFont'>{props.title}</div>
                </div>
                <div>
                    <img className='machineImage' src={props.image} alt='MachineImage' />
                </div>
                <div className='description'>
                    <div className='descriptionFont'>{props.description}</div>
                </div>
            </div>
        </div>
    );
};

export default MachineCard;
