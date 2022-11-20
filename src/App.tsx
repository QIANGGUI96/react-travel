import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage,SigninPage,Register} from "./pages";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signin" element={<SigninPage/>}></Route>
          <Route path="/register" element={<Register/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
