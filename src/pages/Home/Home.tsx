import { Sidebar, Toolbar, Map, Tabs, TabPanel, Tab, Tools, Button, Dropdown } from "components";
import { Layout } from "./styles";

const Home = () => {
    return (
        <Layout>
            <Sidebar>
                <Tabs>
                    <Tab />
                    <Tab />
                    <Tab />
                    <Tab />
                </Tabs>
                <TabPanel />
            </Sidebar>
            <Toolbar>
                <Tools></Tools>
                <Tools></Tools>
                <Tools></Tools>
                <Tools></Tools>
                <Tools></Tools>
                <Tools></Tools>
            </Toolbar>
            <Map />
        </Layout>
    );
};

export default Home;
