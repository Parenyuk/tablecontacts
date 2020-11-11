import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Button, IconButton, InputBase, Paper} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
    }),
);


export const SearchName = () => {

    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}  >
            <InputBase
                className={classes.input}
                placeholder="search by full name"
                inputProps={{ 'aria-label': 'search by full name' }}

            />
            <Button type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </Button>
        </Paper>
    )
}
