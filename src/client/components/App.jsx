import {useEffect, useState} from 'react';

const App = () => {
  const [cheeses, setCheeses] = useState([]);
  useEffect(() => {
    fetch('http://localhost:1234/cheese')
      .then(resp => resp.json())
      .then(data => {
        setCheeses(data);
      });
  }, []);

  return cheeses.map((cheese, i) =>
    (<div key={i}>
      <h1>I love cheese a lot</h1>
      <h3>{cheese.name}</h3>
      <h6>{cheese.description}</h6>
    </div>)
  );
};

export default App;