import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [quoteInfo, setQuoteInfo] = useState({})

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setQuoteInfo({
          text: data.content,
          author: data.author,
        });
      });
      
  };

  return (
    <div className="App">
      <div id="quote-box">
        <div className="quote-content">
          <h2 id="text">
            <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
            {quoteInfo.text}
            <FaQuoteRight size="30" style={{ marginLeft: "10px" }} />
          </h2>
          <h4 id="author">- {quoteInfo.author}</h4>
        </div>
        <div className="buttons">
          <a 
            href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text' + quoteInfo.text} id="tweet-quote" style={{
              backgroundColor: "#1da1f2",
              marginRight: "10px"
            }}
          >
            <FaTwitter color="white" />
          </a>

          <button id="new-quote" onClick={getQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
