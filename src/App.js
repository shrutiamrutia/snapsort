
import './App.css';
import Item from './components/Item';
import Header from './components/Header';


import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
const App = () => {
  return (
    <div className="container">
      <Router>
        <div>
          <Route
            render={props => (
              <Header />
            )}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/mountain" />}
            />
            <Route path="/mountain" render={() => <Item searchTerm="mountain" />} />
            <Route path="/beaches" render={() => <Item searchTerm="beaches" />} />
            <Route path="/birds" render={() => <Item searchTerm="birds" />} />
            <Route path="/foods" render={() => <Item searchTerm="foods" />} />
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;






















// import './App.css';
// import Navigation from './components/Navigation';
// import Mountain from './components/Mountain'
// import Beaches from './components/Beaches'
// import Birds from './components/Birds'
// import Food from './components/Food'


// import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route
//             exact
//             path="/"
//             render={() => <Redirect to="/mountain" />}
//           />
//           <Route path='/mountain' element={<Mountain />} />
//           <Route path='/Beaches' element={<Beaches />} />
//           <Route path='/Birds' element={<Birds />} />
//           <Route path='/Food' element={<Food />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


