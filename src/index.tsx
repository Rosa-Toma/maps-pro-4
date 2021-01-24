import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { MapContextProvider } from "context/MapContext";

ReactDOM.render(
    <React.StrictMode>
        <MapContextProvider>
            <App />
        </MapContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
