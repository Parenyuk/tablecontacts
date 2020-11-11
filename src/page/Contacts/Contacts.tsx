import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {Theme} from '@material-ui/core';
import {MainBar} from './MainBar/MainBar';


export const useContactsStyles = makeStyles((theme: Theme) => ({
    title: {
        fontSize: 24,
        paddingTop: 15,
        paddingLeft: 15,
        fontWeight: 600,

    },

}))

export const Contacts = () => {

    const classes = useContactsStyles();

    return (
        <div className={classes.title}>
            Contacts
            <div>
                <MainBar/>
            </div>
        </div>
    )
}
