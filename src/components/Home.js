import React, { Component, Fragment } from 'react';
import { Container, Box } from '@material-ui/core';
import { Card, TextField } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';


import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';


import { Link } from 'react-router-dom';


import '../css/Home.css';

import Categoria from './Categoria.js';

import Server from "../Server"

import Logo from './Logo';



class Home extends Component {


    constructor(props) {
        super(props)

        this.state = { isLoaded: false, error: null, categorias: {} }

    }

    componentDidMount() {

        let server = new Server()

        server.getCategorias().then((docSnap) => {
            this.setState({
                isLoaded: true,
                categorias: docSnap.data()["categorias"]
            })
        }).catch((error) => {
            console.error(error)
            this.setState({
                isLoaded: true,
                error: error
            })
        })
    }

    logo() {
        const classes = {
            root: {

            },
            media: {
                height: "300px"
            }
        }

        let logo = <Link to="/" style={{ textDecorationLine: "None" }}>
            <Card style={classes.root}>
                <CardMedia
                    component="img"
                    style={classes.media}
                    image="static/images/logo/astronauta.jpg"
                    title="Contemplative Reptile" />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique lorem eu faucibus fermentum.
            </Typography>
                </CardContent>
            </Card>
        </Link>

        return logo
    }

    buscador() {
        const classes = {
            root: {

            },
            buscador: {
                marginBottom: "20px",
                width: "70%",
                textAlign: "center",
                padding: "0px"

            }
        }
        let buscador = <form className={classes.buscador} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Buscador" variant="outlined" style={classes.buscador} />
        </form>

        return buscador
    }

    secciones() {

        const classes = {
            gridItem: {
                width: "100px",
                height: "100px",
                textAlign: 'center',
                overflow: "hidden"
            },
            gridList: {
                width: "90%",
                height: "auto",
            },
            icon: {
                maxWidth: "100px",
                maxHeight: "100px",
                width: "70%",
                overflow: "hidden"
            },

            seccionCategorias: {
                marginBottom: "40px",
                height: "auto",
                overflow: "hidden"
            },
        };
//titleTypographyProps={{ variant: 'caption' }}
        let getCarta = (nombre, logo) => {
            let enlace = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return <Link to={"/categorias/" + enlace} style={{textDecorationLine: "none"}}>
                <Card variant="outlined" className="gridItem">
                    <CardActionArea >
                        <CardContent className="textoCategoria">
                        <span > {nombre}</span>
                        </CardContent>
                        <CardMedia
                            component="img"
                            style={classes.icon}
                            image={logo}
                            title={nombre} />
                    </CardActionArea>
                </Card>
            </Link>
        };

        let getSecciones = (otro) => {
            return <div>
                <Grid
                    container
                    style={classes.gridList}
                    direction="column"
                    justify="center"
                >
                    <Grid item style={{ marginBottom: "20px" }}> {"Categorías populares"}</Grid>
                    <Grid container justify="space-around" alignItems="center" spacing={1} >
                        {Object.keys(this.state.categorias["principal"]).map((key) => {
                            return (
                                <Grid key={this.state.categorias["principal"][key].nombre} item xs={6} sm={3} md={3} lg={2} xl={2} >
                                    {getCarta(this.state.categorias["principal"][key].nombre, this.state.categorias["principal"][key].logo)}
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Grid item xs={12} style={{ margin: "20px" }}> {"Otras categorías"}</Grid>
                    <Grid container justify="space-around" alignItems="center" spacing={1} >
                        {Object.keys(this.state.categorias["otro"]).map((key) => {
                            return (
                                <Grid key={this.state.categorias["otro"][key].nombre} item xs={6} sm={3} md={3} lg={2} xl={2} >
                                    {getCarta(this.state.categorias["otro"][key].nombre, this.state.categorias["otro"][key].logo)}
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </div>
        }

        let secciones = <div>
            <section style={classes.seccionCategorias}>
                {getSecciones("principal")}
            </section>
        </div>

        return secciones
    }


    render() {
        const funCategorias = () => {
            const { isLoaded, error } = this.state;
            if (error) {
                return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
                return <div><CircularProgress /></div>;
            } else {
                return (
                    <Box>
                        {this.secciones()}
                    </Box>
                );
            }
        }
        return (
            <Container align="center">

                {this.buscador()}
                {funCategorias()}

            </Container>
        )

    }
}

export default Home;
