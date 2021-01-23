import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header, Logo, Menu, Button, Main } from "components";
import { Home } from "pages";
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
                        </Switch>
                    </Main>
                </Layout>
            </Router>
        </>
    );
};

export default App;
