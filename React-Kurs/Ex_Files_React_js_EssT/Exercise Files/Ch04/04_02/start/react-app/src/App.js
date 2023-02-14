
import './App.css';
import { useState, useEffect } from "react";


function GithubUser({ name }) {
  return (
    <div>
      <h1>
        {name}
      </h1>
    </div>
  );
}

function App() {
    
  const [data, setData] = useState(null);
  useEffect (() => {
    fetch (`https://api.github.com/users/Nice-Riise`)
    .then((response) => response.json())
    .then(setData);
  }, []);
  
  if (data)
  return <GithubUser name={data.name} />;
return  <h1>Data</h1>
}

export default App;
