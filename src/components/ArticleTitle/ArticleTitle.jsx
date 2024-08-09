import "./ArticleTitle.css"
import { builder } from '@builder.io/sdk';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const ArticleTitle = (props) => {
    {`articleTitle`+console.log(props)}
    return(
        <div className="ArticleTitleParent">
            <div className="ArticleMainTitle">
                {props.MainTitle}
            </div>
            <div className="ArticleSubTitle">
                {props.SubTitle}
            </div>
        </div>
    );
}; 

export default ArticleTitle;