import logo from './logo.svg';
import './App.css';
import './css/style.css'
import { Homepage } from './Homepage/Homepage';
// import { About } from './About/About';
import { useEffect, useState } from 'react';
import { MyImages } from './components/MyImages';


function App() {
  const [picList, setList] = useState(null);
  // const [picList, setList] = ()=> {
    // fetch('http://localhost:5000/api', {
    //   method: "GET",
    //   headers: {'Content-Type': "application/json"}
    // })
    // .then((response => response.json))
    // .then(function(myJson){
    //   setList(myJson)
    //   console.log(picList)
    // })
  // }
  
  useEffect(() => {
    fetch('http://localhost:5000/api')
    .then((response) => response.json())
    .then(setList)
  },[]);

  console.log(picList);

  return (
    <div className="App">
      <Homepage/>

      {/* <About/> */}
      {/* {
        picList.map(
          (picture) => (
            <MyImages
              src={picture.src}
              description={picture.description}
              alt={picture.alt}
            />
          )
        )
      } */}
    </div>
  );
}

export default App;
