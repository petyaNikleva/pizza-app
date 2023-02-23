import styles from './App.module.css';
import Pizza from './components/Pizza';
import pizzas from './data/pizzas.json';
import { ReactComponent as PizzaSVG } from '../src/svg/pizza.svg';
import Cart from './components/Cart/Cart';
import AppStateProvider from './components/AppState';


function App() {
  return (
    <AppStateProvider>
      <div className={styles.container}>
        <div className={styles.header}>
          <div style={{ marginLeft: "150px" }}>
            <svg><PizzaSVG /></svg>
          </div>
          <div className={styles.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>
        <ul>
          {pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} />)}
        </ul>
      </div>
    </AppStateProvider>
  );
}

export default App;
