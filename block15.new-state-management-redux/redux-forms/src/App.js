import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForms';
import FormDataDisplay from './pages/FormDataDisplay';


function App() {
  return (
      <main className="MainContent">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PersonalForm />
        </Route>
        <Route exact path="/professionalForm">
          <ProfessionalForm />
        </Route>
        <Route exact path="/formDisplay">
          <FormDataDisplay />
        </Route>
      </Switch>
      </BrowserRouter>
      </main>
  );
}

export default App;
