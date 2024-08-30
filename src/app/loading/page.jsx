import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import "./loading.css";
import Footer from "@/components/Footer/Footer";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default async function Page(props) {
    const builderModelName = "page";

    const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
        userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/loading" + (props?.params?.page?.join("/") || ""),
    },
    })
    // Convert the result to a promise
    .toPromise();

    return (
    <>
        <div className="loadingParent">
            <div className="bar">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="loadingTitle">
                loading...
            </div>
        </div>
    </>
    );
}