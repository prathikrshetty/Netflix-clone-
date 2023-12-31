import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'

import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import Login from './components/Login'
import Reg from './components/Reg';
import Banner from './components/Banner'

import  Add from   './components/Add'
import Movie from './components/Movie';





export default function Router() {
  return (
<React.Fragment>
<BrowserRouter>
<Routes>
  <Route  path="/"element={
    <React.Fragment>
      <Header/>
      <HomeBanner />
    </React.Fragment>
  }></Route>
  <Route path='/Login' element={
    <React.Fragment>
        <Header/>
        <Login />
        
    </React.Fragment>
    } />
   
   <Route path="/Register" element={
      <React.Fragment>
        <Header/>
        <Reg/>
        </React.Fragment>
    }/>

<Route path="/Add" element={
      <React.Fragment>
        <Header/>
        <Add/>
        </React.Fragment>
    }/>
     {/* <Route path='/dashboard' element={
    <React.Fragment>
      <Header/>
      <Banner/>
      <List title="Netflix Originals" param="originals"/>
              <List title="Trending Now" param="trending"/>
              <List title="Now Playing" param="now_playing"/>
              <List title="popular" param="popular"/>
              <List title="Top Rated" param="top_rated"/>
              <List title="Upcoming" param="upcoming"/>
    </React.Fragment>
    } /> */}
    <Route path='/dashboard' element={
    <React.Fragment>
      <Header/>
      <Banner/>
      <Movie/>
      {/* <List title="Netflix Originals" param="originals"/>
              <List title="Trending Now" param="trending"/>
              <List title="Now Playing" param="now_playing"/>
              <List title="popular" param="popular"/>
              <List title="Top Rated" param="top_rated"/>
    <List title="Upcoming" param="upcoming"/> */}
    </React.Fragment>
    } />
    {/* <Route path='/Movie' element={
    <React.Fragment>
        <Header/>
        
        
    </React.Fragment>
    } /> */}
</Routes>
</BrowserRouter>

</React.Fragment>

  )
}
