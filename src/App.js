
import './App.css';
import './App.scss';
import { Header, Blog, Features, Footer, Possibility, WhatGPT3 } from './containers';
import { Article, Brand, CTA, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <header className="gradient__bg">
        <Navbar/>
        <Header/>
      </header>
    
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
  
    </div>
  );
}

export default App;
