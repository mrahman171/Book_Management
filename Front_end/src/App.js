import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import BooksInfo from './components/AddBooksInfo';
import BooksViews from './components/view_Books';
import UpdateInfo from './components/UpdateBooks';
 
import { useEffect } from 'react'
function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="App">
        <BooksInfo />  
        <Footer />
    </div>
  );
}

export default App;
