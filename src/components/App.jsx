

import React from "react";
import Profile from "./profile/Profile"; 
import Statistics from "./Statistics";
import user from "../user.json";
import data from '../data.json'; 


function App() {
  return (
    <div>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location} 
        avatar={user.avatar}
        stats={user.stats} 
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
}

export default App;
