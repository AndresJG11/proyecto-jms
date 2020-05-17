import React from 'react';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import '../css/logo.css';

const Logo = () => {
    const classes = {
        root: {
            marginTop: "20px",
            marginBottom: "20px"
        },
        media: {
            height: "300px"
        }
    }

    let logo = <Link to="/" style={{ textDecorationLine: "None" }}>
        <Card style={classes.root}>
            <CardMedia
                component="img"
                className="media"
                image={require("../statics/images/logo/astronauta.jpg")}
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

export default Logo;