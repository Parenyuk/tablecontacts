import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import {Contacts} from './page/Contacts/Contacts';
import {Home} from './page/Home';
import {Theme} from '@material-ui/core';


export const useAppStyles = makeStyles((theme: Theme) => ({
    // title: {
    //
    // },

}))

function App() {
    // const classes = useAppStyles();

  return (
    <div className="App">
      <Switch>
        {/*<Route exact path={'/'} component={Home} />*/}
        {/*<Route  path={'/contacts'} component={Contacts}  />*/}
          <Route  path={'/'} component={Contacts}  />
      </Switch>
    </div>
  );
}

export default App;
