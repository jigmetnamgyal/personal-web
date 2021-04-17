import Homepage from './pages/homepage/Homepage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import About from './pages/about/About';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact="exact" path="/" component={Homepage}/>
                    <Route exact="exact" path="/aboutMe" component={About}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
