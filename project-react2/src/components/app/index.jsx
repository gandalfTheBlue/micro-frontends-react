import React from "react";
import { Link } from "react-router-dom";
import { AppRouter } from "../appRouter";
import styles from "./app.module.css";

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
