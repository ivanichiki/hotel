import React, {useEffect} from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import {fetchRooms} from "./redux/appReducer";
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Services} from "./components/Services/Services";
import FeaturedContainer from "./components/Featured/FeaturedContainer";
import {HashRouter, Route} from "react-router-dom";
import RoomContainer from "./components/Room/RoomContainer";
import RoomsContainer from "./components/Rooms/RoomsContainer";

function App() {

  const dispatch= useDispatch()
  useEffect(()=>{
      dispatch(fetchRooms())
  },[])


    return (
    <div className="App">
      <HashRouter>
         <Header/>
          <Route exact path='/'>  <Main/> </Route>
          <Route exact path='/'>    <Services/> </Route>
          <Route exact path='/'>  <FeaturedContainer/> </Route>
          <Route exact path='/rooms/:roomId' component={RoomContainer}/>
          <Route exact path='/rooms/' component={RoomsContainer}/>
      </HashRouter>
    </div>

  );
}

export default App;
