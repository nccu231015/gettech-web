'use client'
import { builder } from '@builder.io/sdk';
import './MachineCard.css';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const MachineCard = (props) => {
    {`machine card`+console.log(props)}
    return(
        <div className='mc_machineCard'>
            <div className='mc_innerBox'>
                <div className='mc_title'>
                    <div className='mc_titleFont'>{props.title}</div>
                </div>
                <div>
                    <img className='mc_machineImage' src={props.image} alt='MachineImage' />
                </div>
                <div className='mc_description'>
                    <div className='mc_descriptionFont'>{props.description}</div>
                </div>
            </div>
        </div>
    );
}; 

export default MachineCard;