import React from 'react';
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import Grid from '@material-ui/core/Grid';

const Footer = () => {
    const classes = {
        root: {
            height: "auto",
            maxHeight: "100px",
            marginTop: "10px"
        },
        imgIcon: {
            width: "30px"
        }
    }
    let footer = <div style={classes.root}>
        <Divider variant="middle" />
        <div>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"

            >
                <Grid item>
                    <List
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Contacto
                            </ListSubheader>
                        }>
                        <ListItem button>
                            <ListItemIcon>
                                <img src={require('../statics/images/iconos/whatsappTrue.png')} style={classes.imgIcon} alt="Whatsapp"></img>
                            </ListItemIcon>
                            <ListItemText primary="WhatsApp" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <img src={require('../statics/images/iconos/facebook.png')} style={classes.imgIcon} alt="Whatsapp"></img>
                            </ListItemIcon>
                            <ListItemText primary="Facebook" />
                        </ListItem>
                    </List>
                </Grid>

                <Grid item>
                    <List
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Trabaja con nosotros
                </ListSubheader>
                        }>
                        <ListItem button>
                            <ListItemIcon>
                                <img src={require('../statics/images/iconos/whatsappTrue.png')} style={classes.imgIcon} alt="Whatsapp"></img>
                            </ListItemIcon>
                            <ListItemText primary="WhatsApp" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <img src={require('../statics/images/iconos/facebook.png')} style={classes.imgIcon} alt="Whatsapp"></img>
                            </ListItemIcon>
                            <ListItemText primary="Facebook" />
                        </ListItem>
                    </List>
                </Grid>

                <Grid item>
                    <List
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Trabaja con nosotros
                </ListSubheader>
                        }>
                        <ListItem button>
                            <ListItemIcon>
                                <img src={require('../statics/images/iconos/whatsappTrue.png')} style={classes.imgIcon} alt="Whatsapp"></img>
                            </ListItemIcon>
                            <ListItemText primary="WhatsApp" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <img src={require('../statics/images/iconos/facebook.png')} style={classes.imgIcon} alt="Whatsapp"></img>
                            </ListItemIcon>
                            <ListItemText primary="Facebook" />
                        </ListItem>
                    
                    </List>
                </Grid>

            </Grid>
        </div>
    </div >


    return footer
}

export default Footer