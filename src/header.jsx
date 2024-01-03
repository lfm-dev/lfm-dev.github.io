import styles from "./header.module.css";

function Buttons() {
  //TODO disappearing buttons
  return (
    <>
      <ul>
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
      </ul>
    </>
  );
}

function Header() {
  return (
    <div className={styles.header}>
      <Buttons />
      <h1>LFM</h1>
    </div>
  );
}

export default Header;
