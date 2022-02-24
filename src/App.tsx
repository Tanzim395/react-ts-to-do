import React from "react";
import "./App.css";
import Tasks from "./Components/Tasks";

function App() {
  return (
    <div className="App">
      <main>
        <div className="text-orange-600 font-bold" style={{ display: "flex", justifyContent: "center" }}>
          React Typescript ToDo App List
        </div>
        <div className="App h-screen flex justify-center items-center bg-slate-900">
          <Tasks />
        </div>
      </main>
    </div>
  );
}

export default App;
