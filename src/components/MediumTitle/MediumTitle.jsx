import "./MediumTitle.css"
import { builder } from '@builder.io/sdk';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const MediumTitle = (props) => {
    {`mediumTitle`+console.log(props)}
    return(
        <div className='mediumTitle_container'>
            <div className='text'>
                {props.text}
            </div>
        </div>
    );
}; 

export default MediumTitle;