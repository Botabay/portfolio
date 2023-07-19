import './App.css';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App(): JSX.Element {
    return (
        <div className="App">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;