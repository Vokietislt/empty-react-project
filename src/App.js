import './App.css';
import React,{ useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lang from './Language/i18n';
import Navigation from './NavigationBar';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes"
import TaskContextProvider, { TaskContext } from "./AppStates"
function App() {
  Lang()
  const { t, i18n } = useTranslation();
  const [lang, setLng] = useState('')

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setLng(lng) 
  };
  var url = window.location.href
  var l  =url.split('=')[1]
  if(window.location.href.indexOf('?lang=')>-1 && lang != l ){
    console.log(l)
    changeLanguage(l)
    window.location='/'
  }

 
  return (
    <TaskContextProvider>
     <BrowserRouter> 
       <Navigation/>
       <Routes/>
     </BrowserRouter>
    </TaskContextProvider>
  );
}

export default App;
