import React from 'react';
import {BrowserRouter as Router,Route}from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.compnent"
import ExerciseLists from "./components/exercise-List.component"
import EditExercises from "./components/edit-exercise-list.component"
import CreateExercises from "./components/create-exercise.component"
import CreateUsers from './components/create-user.component';




function App() {
  return (
    <Router>
    
<Navbar/>
<div className="container">
<br/>
<Route path="/" exact component={ExerciseLists}/>
<Route path="/edit/:id"  component={EditExercises}/>
<Route path="/create"  component={CreateExercises}/>
<Route path="/user"  component={CreateUsers}/>
  </div>  </Router>
   );
}

export default App;
