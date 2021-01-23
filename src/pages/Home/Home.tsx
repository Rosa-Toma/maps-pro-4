import { Sidebar, Toolbar, Map, Tabs, TabPanel, Tab, Tools, Button, Dropdown } from "components";
import { Layout } from "./styles";

const Home = () => {
    return (
        <Layout>
            <Sidebar />
            <Toolbar />
            <Map />
        </Layout>
    );
};

export default Home;
