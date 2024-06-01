import './style.css';
import { useEffect, useState } from 'react';
import { Joke } from '../../components/Joke';

export const HomePage = () => {

  const [jokes, setJokes] = useState([]);
  
  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const jsonResponse = await response.json();
      setJokes(jsonResponse.data);
    };

    fetchJokes();
  }, []);

  return (
    <>
      {
        jokes.map((joke) => {
          return <Joke userAvatar={joke.avatar} userName={joke.name} 
                      text={joke.text} likes={joke.likes} dislikes={joke.dislikes}/>
        })
      }
    </>
  );
};
