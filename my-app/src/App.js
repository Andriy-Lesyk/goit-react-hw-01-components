import Profile from "./components/Profile/Profile"
import "./App.css";
import Statistics from "./components/Statistics/Statistics"
import Friends from "./components/Friends/Friends"
import Transaction from "./components/Transaction/Transaction";

function App() {
  return (
    <div className="App">
      <Profile></Profile>
      <Statistics></Statistics>
      <Friends></Friends>
      <Transaction></Transaction>
    </div>
  );
}

export default App;
