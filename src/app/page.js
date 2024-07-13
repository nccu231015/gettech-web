import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";
import NavBar from "@/components/NavBar/NavBar";
import Header from "@/components/Header/Header";
import CarouselBanner from "@/components/Banner/banner";
import MachineCard from "@/components/MachineCard/MachineCard";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default async function Page(props) {
  const builderModelName = "page";

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      <NavBar></NavBar>

      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
