import React from 'react';
import {Button, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {SearchName} from './SearchName/SearchName';

export const MainBar = () => {
    return (
        <div>
           <SearchName />
           {/*<GenderSelect />*/}
           {/*<SearchNationality />*/}
           <Button>
               <IconButton>
                   <CloseIcon fontSize={'small'} ></CloseIcon>
               </IconButton>
              Clear</Button>
        </div>
    )
}
