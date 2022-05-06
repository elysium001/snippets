import styles from "./nav.module.css"

export default function Navbar(props){
  const { 
    ariaLabel = "navbar"
  } = props

  return(
    <nav className={styles.container} aria-label={ariaLabel}>
      <ol className={styles.list}>
        <li className={styles.listItem}><a href="#home">Home</a></li>
        <li className={styles.listItem}><a href="#chiles">Chiles</a></li>
      </ol>
    </nav>
  )
}