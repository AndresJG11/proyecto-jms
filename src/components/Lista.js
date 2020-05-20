import React, { Component } from 'react';

import { Card, TextField } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Server from "../Server"

var server = new Server()

class Lista extends Component {

    constructor(props) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            error: null,
            isLoaded: false,
            comerciantes: null
        }
    }

    classes = {
        gridItem: {
            width: "100%",
            height: "100%",
            textAlign: 'center'

        },
        gridList: {
            width: "90%",
            height: "auto"
        },
        icon: {
            maxWidth: "100px",
            maxHeight: "100px",
            width: "70%",
            overflow: "hidden",
            margin: "auto"
        },
        separador: {
            display: "inline",
            margin: "10px",
            padding: "10px",

        },
        seccionCategorias: {
            marginTop: "20px",
            marginBottom: "40px",
            height: "auto",
            overflow: "hidden"
        },
        tituloCarta: {
            fontSize: "6px"
        },
        avatar: {
            width: "50px"
        }
    };
    //<Avatar style={this.classes.avatar} src = {require("../statics/images/iconos/whatsappTrue.png")} size="100px"/>

    getCarta = (logo, nombre, contacto, descripcion, isWhatsapp) => {
        let imageName = ""
        let linkWhatsapp = ""
        if (isWhatsapp) {
            linkWhatsapp = "https://api.whatsapp.com/send?phone=57" + contacto + "&text=Hola!%20quisiera%20pedir%20un%20domicilio"
            imageName = <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer">  <img src={require('../statics/images/iconos/whatsappTrue.png')} style={this.classes.avatar} alt="Whatsapp"></img> </a>
        } else {
            imageName = <img src={require('../statics/images/iconos/whatsappFalse.png')} style={this.classes.avatar} alt="Whatsapp"></img>
        }
        return <Card variant="outlined" style={this.classes.gridItem} >
            <CardHeader
                avatar={imageName}
                title={nombre}
                subheader={contacto}
            />
            <CardMedia
                component="img"
                style={this.classes.icon}
                image={logo}
                title={nombre} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {descripcion}
                </Typography>
            </CardContent>
        </Card>
    };


    componentDidMount() {
        server.getComerciantes(this.props.id).then((docSnap) =>
            this.setState({
                isLoaded: true,
                comerciantes: docSnap.data()
            })
        ).catch((error) =>
            this.setState({
                error: error,
                isLoaded: true
            })
        )
    }

    buscador() {
        const classes = {
  
            buscador: {
                marginBottom: "20px",
                width: "70%",
                textAlign: "center"
            }
        }
        let buscador =  <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Buscador" variant="outlined" style={classes.buscador} />
            </form>

        return buscador
    }


    render() {
        var render = null

        const { error, isLoaded, comerciantes } = this.state;
        if (!isLoaded) {
            render = <div> <CircularProgress /> </div>
        } else if (error) {
            render = <p> {error.message} </p>
        } else {
            render = <Grid container style={this.classes.gridList}>
                <Grid item xs={12}>
                    <Grid container justify="space-around" alignItems="center" spacing={1}>
                        {Object.keys(comerciantes).map((key) => (
                            <Grid key={comerciantes[key]["nombre"]} item xs={12} sm={12} md={4} lg={4} xl={3}>
                                {this.getCarta(comerciantes[key]["logo"],
                                    comerciantes[key]["nombre"],
                                    comerciantes[key]["contacto"],
                                    comerciantes[key]["descripcion"],
                                    comerciantes[key]["whatsapp"]
                                    )}
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        }
        return (
            
        <div> <h1>{this.props.id}</h1> {this.buscador()} {render} </div>
        )
    }


}




export default Lista;