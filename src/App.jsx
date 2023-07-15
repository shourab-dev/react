import Header from "./Components/Header";
import Content from './Components/Content';
import Footer from './Components/Footer';
const App = () => {
    return (
        <>
            <div className="container">
                <Header title="What is your Story?"/>
                <Content/>
                <Footer/>
            </div>
            
        </>
    );
};

export default App;
