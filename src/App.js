import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { TicketLists } from './pages/ticket-list/TicketLists';
// import { Dashboard } from './pages/dashboard/DashboardPage';
// import { Entry } from './pages/entry/Entry.page';
// import { AddTicket } from './pages/new-ticket/AddTicket';
function App() {
  return (
    <div className="App">
     {/*<Entry/>*/}
     <DefaultLayout>
       {/*<Dashboard/>*/}
       {/*<AddTicket />*/}
      <TicketLists />
     </DefaultLayout>
    </div>
  );
}

export default App;
