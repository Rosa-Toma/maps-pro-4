import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header, Logo, Menu, Button, Main } from "components";
import { Home, Search, Information, Account } from "pages";
import { Layout } from "./style";

const App = () => {
    return (
        <>
            <Router>
                <Layout>
                    <Header>
                        <Logo />
                        <Menu>
                            <Link to="/">carte</Link>
                            <Link to="/search">recherche</Link>
                            <Link to="/information">information</Link>
                            <Link to="/account">compte</Link>
                        </Menu>
                        <Button />
                    </Header>
                    <Main>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/search">
                                <Search />
                            </Route>
                            <Route path="/information">
                                <Information />
                            </Route>
                            <Route path="/account">
                                <Account />
                            </Route>
                        </Switch>
                    </Main>
                </Layout>
            </Router>
        </>
    );
};

export default App;
