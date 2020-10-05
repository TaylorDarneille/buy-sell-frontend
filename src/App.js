import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Welcome from './components/Welcome';
import About from './components/About';
import Footer from './components/Footer';
import Results from './components/Results';
import ListItem from './components/ListItem';
import ListId from './components/ListId';
import UserListings from './components/UserListings';
// import Details from './components/Details';
// import Cloudinary from './components/Cloudinary';
import './App.css';


// const drawerWidth = 240;


////////////////////////////////////////////////////////////////////////////////
const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  return <Route {...rest} render={(props) => {
      return user ? <Component {...rest} {...props} /> : <Redirect to="/login" />
    }}
  />;
}

function App() {
  // set state values
  let [currentUser, setCurrentUser] = useState("");
  let [isAuthenticated, setIsAuthenticated] = useState(true);
  let [cat, setCat] = useState("");
  let [resultsData, setResultsData] = useState({});
  let [resultData, setResultData] = useState({});



  useEffect(() => {
    let token;
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
      setIsAuthenticated(true);
    }
  }, []);
  
  const handleResultsData = setResultsData

  const handleResultData = setResultData


  const nowCurrentUser = (userData) => {
    console.log('nowCurrentUser is working...');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  console.log('Current User', currentUser);
  console.log('Authenicated', isAuthenticated);
  console.log("App-cat", cat)

  


  

  return (
    <div>

    
      <header>
        <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} setCat={setCat} user={ currentUser }/>
      </header>

    
      <div>
        <Switch>
          <Route path="/signup" component={ Signup } />
          <Route 
            path="/login" 
            render={ (props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>} 
          />
          <Route path="/about" component={ About } />
          <Route exact path="/" component={ Welcome } />
          <PrivateRoute path="/profile" component={ Profile } user={currentUser} />
          
          
          {currentUser ?
          <>  
            <Route path='/userlistings' component={ UserListings } user={currentUser} />
            
            <Route path="/results/all" component={ Results } handleResultsData={handleResultsData} user={currentUser} category={cat}/>
            <PrivateRoute 
              path="/results/clothing"
              component={ Results } user={currentUser} resultsData={resultsData} handleResultsData={handleResultsData} category={cat}
            />
            <PrivateRoute 
              path="/results/electronics"
              component={ Results } user={currentUser} handleResultsData={handleResultsData} category={cat}
            />
            <PrivateRoute 
              path="/results/furniture"
              component={ Results } user={currentUser} handleResultsData={handleResultsData} category={cat}
            />
            <PrivateRoute 
              path="/results/movies-books-music"
              component={ Results } user={currentUser} handleResultsData={handleResultsData} category={cat}
            />
            <PrivateRoute 
              path="/results/sports"
              component={ Results } 
              user={currentUser} 
              handleResultsData={handleResultsData} 
              category={cat}
            />
            <PrivateRoute 
              path="/results/tools"
              component={ Results } 
              user={currentUser} 
              handleResultsData={handleResultsData} 
              category={cat}
            />
            <PrivateRoute 
              path="/results/others"
              component={ Results } 
              user={currentUser} 
              handleResultsData={handleResultsData} 
              category={cat}
            />
            <Route 
              path="/list"
              render={ (props) => <ListItem {...props} user={currentUser}/> }
            />
            <Route 
              path='/listid/:id' 
              component={ ListId } 
              handleResultData={handleResultData} 
              user={currentUser} 
              resultData={resultData} 
            />
          </>
          :
          null
          }
          </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
