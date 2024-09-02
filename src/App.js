import React from "react";
import Card from "./components/card";
import { routes } from "./routes";

const App = () => {
    return (
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">{
        routes.map(route => <Card key={route.path} title={route.title} route={route.path}/>)
       }</div>
    )
}

export default App;