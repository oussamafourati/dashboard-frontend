import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Ticket } from './pages/ticket/Ticket.page';
import { TicketLists } from './pages/ticket-list/TicketLists';
import { Dashboard } from './pages/dashboard/DashboardPage';
import { Entry } from './pages/entry/Entry.page';
import { AddTicket } from './pages/new-ticket/AddTicket';
import { PrivateRoute } from './components/private-route/PrivateRoute'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
             <Entry/>
          </Route>
          
            <PrivateRoute path="/dashboard"><Dashboard/></PrivateRoute>
            <PrivateRoute path="/addTicket"><AddTicket /></PrivateRoute>
            <PrivateRoute path="/tickets"><TicketLists /></PrivateRoute>
            <PrivateRoute path="/ticket/:tId"><Ticket/></PrivateRoute>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
