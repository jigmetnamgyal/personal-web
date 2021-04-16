import Homepage from './pages/homepage/Homepage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import AboutMe from './pages/aboutMe/AboutMe';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact="exact" path="/" component={Homepage}/>
                    <Route exact="exact" path="/aboutMe" component={AboutMe}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
