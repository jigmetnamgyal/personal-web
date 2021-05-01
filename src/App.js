import Homepage from './pages/homepage/Homepage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/Nav/NavigationBar';
import About from './pages/about/About';
import Bookshelf from './pages/bookshelf/Bookshelf';
import Projects from './pages/projects/Projects';
import IndividualProjects from './pages/Indvidualprojects/IndividualProjects';
import Blog from './pages/blog/Blog';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/aboutMe" component={About}/>
                        <Route path="/bookShelf" component={Bookshelf}/>
                        <Route exact path="/projects" component={Projects}/>
                        <Route path="/projects/:projectId" component={IndividualProjects}/>
                        <Route path="/blog" component={Blog}/>
                    </Switch>
            </div>
        </Router>
    );
}

export default App;
