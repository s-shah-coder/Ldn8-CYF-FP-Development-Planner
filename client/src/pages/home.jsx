import { buttons, dummyText, title } from "../components/atom";

import styles from "../styles/pages/home.module.css";

const Home = () => {
  return (
    <>
      {title("Developer Planner")}
      {dummyText()}
      <div className={styles.div}>
        {buttons("primary", "SignUp", "/signup")}
        {buttons("warning", "login", "/login")}
      </div>
      <a style={{ margin: "2% 25%", float: "right" }} href="/resetPassword">
        Forget Password
      </a>
    </>
  );
};

export default Home;
