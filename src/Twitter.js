import React,{useState} from 'react'

const Twitter = () => {
  const [tweets, setTweets] = useState([]);

  const [name, setName] = useState("bhavika");
  const [givenTweet, setGivenTweet] = useState("");

  const fetchTweet = async () => {
    let data = await fetch(
      "https://apex.oracle.com/pls/apex/bhav_work/tweet/GET"
    );
    let convertedData = await data.json();
    console.log(convertedData);
    setTweets(convertedData.items);
  };
  const postTweet = async () => {
    await fetch(
      `https://apex.oracle.com/pls/apex/bhav_work/tweet3/POST?name=${name}&tweet=${givenTweet}`,
      { method: "POST" }
    );
  };
  return (
    <div className='posts'>
      <div className='Home'>Home</div>
      <input type="text" placeholder='Your Name' value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}></input>
      <br></br>
      <br></br>
      <input type="text" placeholder='Enter your Tweet' value={givenTweet}
        onChange={(event) => {
          setGivenTweet(event.target.value);
        }}></input>
      <br></br>
      <br></br>
      <button class="btn btn-outline-primary" onClick={postTweet}>Add Tweet</button>
      
      <button  class="btn btn-outline-secondary" onClick={fetchTweet}>Fetch Tweet</button>
      {tweets.map((element) => {
        return (
          <>
          <div id="my_tweets">
            <div id="tweets">
              <p> {element.name}</p>
              <p>{element.tweet}</p>
            </div>
            </div>
          </>
        );
      })}
    </div>
  )
}

export default Twitter
