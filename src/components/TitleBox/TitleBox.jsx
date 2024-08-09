import "./TitleBox.css"
import { builder } from '@builder.io/sdk';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const TitleBox = (props) => {
    {`titleBox`+console.log(props)}
    return(
        <div className="TitleBox">
            {props.title}
        </div>
    );
}; 

export default TitleBox;