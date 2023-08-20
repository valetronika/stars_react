import './App.css';
import Products from './components/Products/Products';
import Footer from './components/footer/Footer/Footer';
import Header from './components/header/Header';
function App() {
  console.log('++++++++++++++++++');
  return (
    <div className="App">
      <Header/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
