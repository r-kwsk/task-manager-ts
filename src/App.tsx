import React, { FC, useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './components/EventForm';
import Events from './components/Events'
import OperationLogs from './components/OperationLogs';
import EventsInProgress from './components/EventsInProgress';
import EventsDone from './components/EventsDone';
import AppContext from './contexts/AppContext';
import reducer from './reducers/';//indexは省略可


// for ts test
import './App.css';

const APP_KEY = 'appWithRedux';

const App: FC = () => {


   //本番環境用
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: [],
    eventsInProgress: [],
    eventsDone: [],
    createCount: 0,
  }

  // 検証用
  // const initialState = {
  //   events: [],
  //   operationLogs: [],
  //   eventsInProgress: [],
  //   eventsDone: [],
  //   createCount: 0
  // }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Switch>
          {/* container-fluidってなんだっけ？？ */}
          {/* <div className="container-fluid">
            <Route exact path="/">
              <EventForm />
              <Events />
              <OperationLogs />
            </Route>
          </div>   */}
          <Route exact path="/">
            <EventForm />
            <Events />
            <EventsInProgress />
          </Route>
          <Route exact path="/events">
            <EventForm />
            <Events />
            <EventsInProgress />
          </Route>
          <Route exact path="/events/eventsDone" component={EventsDone} />
          <Route exact path="/events/logs" component={OperationLogs} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
