import { fetchData } from './api';
import Cards from './components/Cards/Cards';
import styles from './App.module.css'
function App() {
   const componentDidMount=async()=>{
    const data=await fetchData();
    console.log(data);
  }
  componentDidMount();
  return (
    <div className={styles.container}>
      <Cards />
    </div>
  );
}

export default App;
