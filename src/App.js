import React from "react";
import InfiniteLoader from "./components/infiniteLoader";
import Accordion from "./components/accordion";

const App = () => {
    return (
        <>
            {/* <InfiniteLoader /> */}
            <div className="p-10">
                <Accordion />
            </div>
        </>
    )
}

export default App;