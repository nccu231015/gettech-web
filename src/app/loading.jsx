import "./loading.css"

export default async function Loading() {

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