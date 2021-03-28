import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  // const user = null;

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;
