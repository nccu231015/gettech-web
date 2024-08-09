import "./TextBox.css"
import { builder } from '@builder.io/sdk';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const TextBox = (props) => {
    {`textBox`+console.log(props)}
    return(
        <div className="TextBox">
            {props.text}
        </div>
    );
}; 

export default TextBox;