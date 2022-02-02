import './App.css';
import TweetsProvider from './Tweet/Context/TweetsContext';
import TweetList from './Tweet/TweetList';

function App() {
  return (
    <div className="App">
      <TweetsProvider>
        <TweetList />
      </TweetsProvider>
    </div>
  );
}

export default App;
