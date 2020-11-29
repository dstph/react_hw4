
import './App.css';
import UserWrapper from './components/UserWrapper/UserWrapper';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import CommentsWrapper from './components/CommentsWrapper/CommentsWrapper';



function App() {
  return (
    <Router>
	    <div className="App">
	       	<UserWrapper />
	      	
	       	<Switch>
	       		

				<Route to='/user/:id' component={CommentsWrapper} />
	       	</Switch> 
	    </div>
    </Router>
  );
}

export default App;