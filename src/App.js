import './App.css';
import {tweetsData} from './Data/tweets';
import TweetList from './Tweet/TweetList';
import { useState } from 'react';

function App() {

  let [tweets, setTweets] = useState(tweetsData)

  let addCommentFn = (tweetId, comment) => {
    let newTweets = tweets.map(tweet => {
      if (tweet.id === tweetId) {
        tweet.comments = [...tweet.comments, comment]
      }
      return tweet
    })

    setTweets(newTweets)
  }

  return (
    <div className="App">
      <TweetList tweets={tweets} 
        addCommentFn={addCommentFn} />
    </div>
  );
}

export default App;
