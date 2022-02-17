import React from "react";
import { Display } from "./components/Display";
import { Navbar } from "./components/Navbar";
import AuthProvider from "./store/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Display />
    </AuthProvider>
  );
}

export default App;
