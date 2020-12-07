import './App.css';
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from './Footer'
import Pagecontent from './Pagecontent'
function App() {
  return (

    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />
          <Pagecontent />
        </div>
        <Footer />
      </div>
    </div>

  );
}

export default App;
