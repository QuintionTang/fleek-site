import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h4>Fleek React Site</h4>
                <p>在 Fleek 上使用 IPFS 部署</p>
                <a
                    className="App-link"
                    href="https://fleek.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Fleek
                </a>
            </header>
        </div>
    );
}

export default App;
