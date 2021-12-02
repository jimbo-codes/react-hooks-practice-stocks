import React, {useState, useEffect} from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stockList, setStockList] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [secondStock, setSecondStock] = useState([]);
  // have sell from portfolio functionality
// filter and sort the "stockList" here.
  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(items => {
      var copyArray = JSON.parse(JSON.stringify(items));
      setStockList(items)
      })
  },[])
  useEffect(() => {
    setStockList(secondStock);
  },[])

  function handlePortfolio(item){
    setPortfolio([...portfolio, item])
  }
  
  function removingPort(item){
      const newPort=portfolio.filter(stock=> {
         return stock.id !==item.id
      })
      setPortfolio(newPort);
    }
function alphabetSort(){
  let stockCopy=[...stockList]
  const testing = stockCopy.sort(function(a, b) {
    let textA = a.name.toUpperCase();
    let textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
})
  setStockList(testing)
  console.log(stockList)

}

function pxSort() {
let pxCopy = [...stockList]
const sorting = pxCopy.sort(function(a,b) {
  let numA = a.price
  let numB = b.price
  return (numB-numA)
})
setStockList(sorting);
}
// need to do another full code challenge but with persisted deletes etc.
// function filteredSort(event) {
//   let filtered = JSON.parse(JSON.stringify(stockList));
//   const filtering = filtered.filter((stock) => {
//    return event.target.value === stock.type
//   })



// setStockList(filtering)

//   fetch('http://localhost:3001/stocks')
//   .then(r => r.json())
//   .then(items => {
//     // var copyArray = JSON.parse(JSON.stringify(items));
//     setSecondStock(items)
//     })

// console.log()

//how do I make it so you can multiple filter this?
// }

  return (
    <div>
      <Header />
      <MainContainer 
      stocks = {stockList}
      portfolio = {portfolio}
      addPortfolio={handlePortfolio}
      removePortfolio={removingPort}
      alphabetSort={alphabetSort}
      pxSort={pxSort}
      // filteredSort={filteredSort}
      />
    </div>
  );
}

export default App;
