import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header, Logo, Menu, Button, Main } from "components";
import { Home, Search, Information, Account } from "pages";
import { useTheme } from "hooks";
import { Layout, GlobalStyle } from "./styles";

const App = () => {
    const [theme, updateTheme] = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <Router>
                    <Header>
                        <Logo />
                        <Menu>
                            <Link to="/">carte</Link>
                            <Link to="/search">recherche</Link>
                            <Link to="/information">information</Link>
                            <Link to="/account">compte</Link>
                        </Menu>
                        <Button icon={theme.icon} onClick={updateTheme} />
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
                </Router>
            </Layout>
        </ThemeProvider>
    );
};

export default App;
