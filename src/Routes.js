import React from 'react';
import { Switch, Route, useParams, BrowserRouter } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Categoria from './components/Categoria';
import Home from './components/Home';
import Logo from './components/Logo';
import MyAppBar from './components/MyAppBar';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import Registro from './components/Registro';


const Routes = () => {
    let { id } = useParams();
    console.log(id)
    //<ResponsiveBar/>
    return (<div>
        <MyAppBar />
        <Container align="center">
            <BrowserRouter>
                <Logo />
                <Switch>
                    <Route exact path={"/"} component={Home} />
                    <Route exact path={"/prueba"} component={AdminPanel} />
                    <Route path={"/categorias/:id"} render={(props) => <Categoria id={props.match.params.id} />} />
                    <Route path={"/admin"} component={AdminPanel} />
                    <Route path={"/registro"} component={Registro} />
                </Switch>
            </BrowserRouter>
        </Container>
        <Footer />

    </div>
    );
}

export default Routes;

