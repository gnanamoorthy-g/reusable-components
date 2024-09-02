import React from "react";

import Accordion  from "./components/accordion/index";
import InfiniteLoader from "./components/infiniteLoader";

export const routes = [
    {
        title :  "Accordion",
        path : '/accordion',
        element : <Accordion/>
    },
    {
        title :  "Infinite Loader",
        path : '/infiniteLoader',
        element : <InfiniteLoader/>
    }, 
]