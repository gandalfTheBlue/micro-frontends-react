import React from "react";
import { Link } from "react-router-dom";
import styles from "./app.module.css";
import { AppRouter } from "../appRouter";

const App = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </nav>
      <AppRouter />
    </div>
  );
};

export default App;
