import './App.css';
import BoardMembers from './BoardMembers';
import Footer from './Footer';
import Header from './Header';
import HBphoto from './Image';
import Middle_part from './Middle_Section';
import HB_text from './Text';


function Homepage() {
  return (
    <div className="home">
    <Header/>
    {/*<Middle_part/>*/}
    <HBphoto/>
   <HB_text/>
    <BoardMembers/>
    <Footer/>
    
    </div>
  );
}

export default Homepage;
