import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Body */}
      <div className="app__body">
        {/* side bar */}
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* widgets */}
        <Widgets />
      </div>
    </div>
  );
}

export default App;
