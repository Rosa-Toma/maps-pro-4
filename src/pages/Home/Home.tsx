import { Sidebar, Toolbar, Map, Tabs, TabPanel, Tab, Tools, Button, Dropdown } from "components";
import { Layout } from "./styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <Layout>
            <Sidebar>
                <Router>
                    <Tabs>
                        <Link to="/">légende</Link>
                        <Link to="/selection">sélection</Link>
                        <Link to="/tools">outils</Link>
                        <Link to="/localisation">localisation</Link>
                    </Tabs>
                    <TabPanel>
                        <Switch>
                            <Route exact path="/">
                                <h1>legend</h1>
                            </Route>
                            <Route path="/selection">
                                <h1>selection</h1>
                            </Route>
                            <Route path="/tools">
                                <h1>outils</h1>
                            </Route>
                            <Route path="/localisation">
                                <h1>localisation</h1>
                            </Route>
                        </Switch>
                    </TabPanel>
                </Router>
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
