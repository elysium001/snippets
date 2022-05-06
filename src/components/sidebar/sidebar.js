import styles from "./sidebar.module.css"
import classnames from "classnames"

export default function Sidebar(props){
  const {
    open
  } = props

  const closeSidebar = () => props.onClose(!open)

  return (
    <nav className={classnames({[styles.container]: true, [styles.open]: open})}>
      <button className={styles.closeBtn} onClick={closeSidebar}>Close</button>
      <ol className={styles.list}>
        <li className={styles.listItem}><a href="#home">Home</a></li>
        <li className={styles.listItem}><a href="#chiles">Chiles</a></li>
      </ol>
    </nav>
  )
}