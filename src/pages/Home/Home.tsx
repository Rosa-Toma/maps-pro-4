import { Sidebar, Toolbar, Map, Tabs, TabPanel, Tools, Button, Dropdown } from "components";
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
                <Tools title="standard">
                    <Button width={80} height={50} onClick={() => console.log("hello")} />
                    <Button width={80} height={50} onClick={() => console.log("hello")} />
                    <Button width={80} height={50} onClick={() => console.log("hello")} />
                </Tools>
                <Tools title="navigation">
                    <Button width={80} height={50} onClick={() => console.log("hello")} />
                    <Button width={80} height={50} onClick={() => console.log("hello")} />
                    <Button width={80} height={50} onClick={() => console.log("hello")} />
                    <Button width={80} height={50} onClick={() => console.log("hello")} />
                </Tools>
                <Tools title="outils">
                    <Button width={80} height={50} onClick={() => console.log("hello")} />
                </Tools>
                <Tools title="accroche">
                    <Button width={80} height={50} onClick={() => console.log("hello")} />
                </Tools>
                <Tools title="dessin">
                    <Button width={80} height={50} onClick={() => console.log("hello")} />
                    <Button width={80} height={50} onClick={() => console.log("hello")} />
                </Tools>
                <Tools title="affichage">
                    <Button width={80} height={50} onClick={() => console.log("hello")} />
                    <Button width={80} height={50} onClick={() => console.log("hello")} />
                </Tools>
            </Toolbar>
            <Map />
        </Layout>
    );
};

export default Home;
