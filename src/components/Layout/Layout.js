import Navbar from "../nav/nav"
import Sidebar from "../sidebar/sidebar"
import styles from "./layout.module.css"
import classnames from "classnames"
import { useState } from "react"

export default function Layout(){
  const [showSidebar, setShowSidebar] = useState(true)
  return (
    <div className={styles.container}>
      <Navbar className={classnames({[styles.sidebarOpen]: showSidebar})}/>
      <Sidebar open={showSidebar} onClose={setShowSidebar}/>
      <main className={classnames({[styles.row]: true, [styles.sidebarOpen]: showSidebar})}>
        <h1>Chiles</h1>

      </main>
    </div>
  )
}