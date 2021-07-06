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
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        statis={ user.stats}/>
      <Statistics title={'upload stats'} stats={ Statistical}/>
      <Friends friends={FriendsInfo }/>
      <Transaction transacts={ Transact}/>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  statis:PropTypes.object,
  title: PropTypes.string,
  stats : PropTypes.array,
  friends:PropTypes.array,
  transacts:PropTypes.array,
};


export default App;
