import './App.css';
import BoardMembers from './BoardMembers';
import Footer from './Footer';
import Header from './Header';
import HBphoto from './Image';
import HB_text from './HbOutline';


function Homepage() {
  return (
    <div className="home">
    <Header/>
    <HBphoto/>
   <HB_text/>
    <BoardMembers/>
    <Footer/>
    
    </div>
  );
}

export default Homepage;
