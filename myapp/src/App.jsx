// import { useEffect, useState } from 'react'
// import './App.css'
// import Cryptolist from './Cryptolist';

// function App() {
// const[coinData , setCoinsData] = useState([]);
// const[currentPage, setCurrentPage] = useState(1);
// const[postsPerPage, setPostsPerPage] = useState(10);

// useEffect(async ()=>{

//   const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

//   setCoinsData(res.data);

// },[])

//   return (
//    <>
//    <h1>Crypto Gallery</h1>
//    <Cryptolist coinsData={coinData}/>

//    </>
//   )
// }

// export default App

import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Cryptolist from "./Cryptolist";
import Pagination from "./Pagination";

function App() {
  const [coinData, setCoinsData] = useState([]);
  console.log(coinData);  

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinData.slice(firstPostIndex, lastPostIndex);


  let callApi = () => {
    console.log("call api");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setCoinsData(res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    callApi();
  }, [])

  return (
    <>
      <h1>Pagination in Reactjs</h1>
      <Cryptolist coinData={currentPosts} />


      <Pagination totalposts={coinData.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}
      currentPage={currentPage}
       />

    </>
  );
}

export default App;
