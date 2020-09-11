import React from 'react';
import './App.css';
import ScreenSwitcher from './Components/ScreenSwitcher';

function App() {
  return (
    <ScreenSwitcher content= {[Screen1, Screen2, Screen3, Screen4]}/>
  );
}

const Screen1 = ()=>{
  return (
      <div style={
        {
        backgroundColor: "blue",
        width: "100%",
        height: "100vh",
        }}>
          
      </div>
  )
}

const Screen2 = ()=>{
  return (
      <div style={
        {
        backgroundColor: "red",
        width: "100%",
        height: "100vh",
        }} >
          
      </div>
      
  )
}

const Screen3 = ()=>{
  return (
      <div style={
        {
        backgroundColor: "lime",
        width: "100%",
        height: "100vh",
        }} >
          
      </div>
      
  )
}

const Screen4 = ()=>{
  return (
      <div style={
        {
        backgroundColor: "yellow",
        width: "100%",
        height: "100vh",
        }} >
          
      </div>
      
  )
}

export default App;
