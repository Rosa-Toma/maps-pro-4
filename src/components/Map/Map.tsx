import { Layout } from "./styles";
import { useContext, useEffect } from "react";
import { MapContext } from "context/MapContext";

const Map = () => {
    const MAP = useContext(MapContext);

    useEffect(() => {
        if (MAP) {
            MAP.setTarget("map");
            return () => MAP.setTarget(undefined);
        }
    }, [MAP]);

    return <Layout id="map"></Layout>;
};

export default Map;
