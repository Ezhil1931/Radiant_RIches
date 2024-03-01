
import './App.css';
import Content from './Component/Content';
import Footer from './Component/Footer';

import Header from './Component/Header';
import NavBar from './Component/NavBar';
import Relateddeals from './Component/Relateddeals';

function App() {
  const headTitle="Best Website builder in the US"
  const host=['Home','Hosting for all','Hosting','Hosting6' ,'Hosting5']
 const hdMenu=["Tools","Aws Builder","Start Build","Tooling","BlueHosting"]
 
  return (
    <div className="App">
        
    <NavBar/>
<Header
headTitle={headTitle}

host={host}
hdMenu={hdMenu}
/>
<Content/>
<h1>Related deals you might like for</h1>
<Relateddeals/>
<Footer/>
    </div>
  );
}

export default App;
