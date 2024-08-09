'use client'
import { builder } from '@builder.io/sdk';
import './ImageCard.css';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const ImageCard = (props) => {
    {`image card`+console.log(props)}
    return(
        <div className='IC_machineCard'>
            <div className='IC_innerBox'>
                <div className='IC_title'>
                    <div className='IC_titleFont'>{props.title}</div>
                </div>
                <div>
                    <img className='IC_machineImage' src={props.image} alt='MachineImage' />
                </div>
            </div>
        </div>
    );
}; 

export default ImageCard;