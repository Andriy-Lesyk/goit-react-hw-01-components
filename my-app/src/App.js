import PropTypes from "prop-types"
import Profile from "./components/Profile/Profile"
import "./App.css";
import Statistics from "./components/Statistics/Statistics"
import Friends from "./components/Friends/Friends"
import Transaction from "./components/Transaction/Transaction";
import user from "./components/data/user.json"
import Statistical from "./components/data/statistical.json"
import Transact from "./components/data/transaction.json" 
import FriendsInfo from "./components/data/friends.json"

function App() {
  return (
    <div className="App">
      <Profile Name={user.name} Tag={user.tag} Location={user.location}/>
      <Statistics Label={Statistical.label} Percent={ Statistical.percentage}/>
      <Friends Text={ FriendsInfo.name}/>
      <Transaction Tdtype={Transact.type } Tdamount={Transact.amount } Tdcurrency={Transact.currency }/>
    </div>
  );
}

App.propTypes = {
  Name: PropTypes.string,
  Tag: PropTypes.string,
  Location: PropTypes.string,
  Label: PropTypes.string,
  Percent : PropTypes.number,
  Text: PropTypes.string,
  Tdtype: PropTypes.string,
  Tdamount: PropTypes.number,
  Tdcurrency: PropTypes.string,
};


export default App;
