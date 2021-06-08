import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthContainer from './views/authPage/AuthContainer';
import Posts from './views/posts/Posts';
import "./App.css"

function App() {
      return (
        <div className="container">

          <Router>
            <Switch>
              <Route path='/auth'>
                <AuthContainer />
              </Route>
              <Route path='/posts'>
                <Posts/>
              </Route>
            </Switch>
          </Router>
        </div>
  );
}

export default App;
