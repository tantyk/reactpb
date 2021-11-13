import styles from './App.module.scss';
import Newcomponent from './components/Newcomponent/Newcomponent';
import Newcomponent1 from './components/Newcomponent1/Newcomponent1';

function App() {
  return (
    <div classNames={styles.appWrapper}>
      <Newcomponent text="Da fak am i doing"/>
      <Newcomponent1 />
    </div>
  );
} 

export default App;
