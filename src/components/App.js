import React from "react";
import SearchBar from "./SearchBar";
import ProfileList from "./ProfileList";
import ProfilePage from "./ProfilePage";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <SearchBar />
        <Route path="/" exact />
        <Route path="/profilelist" component={ProfileList} />
        <Route path="/profilepage" component={ProfilePage} />
      </BrowserRouter>
    </div>
  );
};

export default App;
