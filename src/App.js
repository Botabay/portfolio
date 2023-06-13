import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { AboutRemote } from './components/content/AboutRemote/AboutRemote';
import { Contacts } from './components/content/Contacts/Contacts';
import { Introduction } from './components/content/Introduction/Introduction';
import { MyWorks } from './components/content/MyWorks/MyWorks';
import { Skills } from './components/content/Skills/Skills';

function App() {
    return (
        <div className="App">
            <Header />
            <Introduction />
            <Skills />
            <MyWorks />
            <AboutRemote />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;