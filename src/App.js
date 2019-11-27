import React from "react";
import { Route } from "react-router-dom";
import {
  MainPage,
  PostPage,
  LoginPage,
  WritePostPage,
  JoinInfoPage,
  JoinMainPage,
  FestivalInfo,
  FestivalMain
} from "./pages/index";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={MainPage} />
      <Route path="/post" component={PostPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/wpost" component={WritePostPage} />
      <Route exact path="/Join" component={JoinMainPage} />
      <Route exact path="/Join/info" component={JoinInfoPage} />
      <Route exact path="/festival" component={FestivalMain} />
      <Route exact path="/festival/Info" component={FestivalInfo} />
    </div>
  );
}

export default App;
