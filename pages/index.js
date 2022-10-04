import Header from './components/Header'
import Navbar from './components/Navbar'
import styles from '../styles/Home.module.css'
import Content from './components/Content'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
