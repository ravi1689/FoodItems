import Featured from './components/Featured';
import Delivary from './components/Delivary';
import TopNav from "./components/TopNav";
import TopPicks from './components/TopPicks';
import Meal from './components/Meal';
import Categories from './components/Categories'
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured />
      <Delivary />
      <TopPicks/>
      <Meal/>
      <Categories />
      <NewsLetter />
      <Footer />
    </div>
  );
}


export default App