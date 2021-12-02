import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, addPortfolio, portfolio, search}) {
  // map across the stock list state to render each <stock> component
  // stocks
  // let filtered = JSON.parse(JSON.stringify(stocks)
  if(!search){
    console.log(stocks);
  }else if(search==='All'){
    console.log(stocks);
  }else{
    stocks = stocks.filter((stock) => {
      return search === stock.type
     })   
  }
  
  // console.log(filtering)
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => {
        // console.log(portfolio.length)
        // top level to "stocks" you include your filtering.
       return <Stock addPortfolio={addPortfolio} portfolio={portfolio}id={stock.id}key={stock.id} name={stock.name} price={stock.price} ticker={stock.ticker} type={stock.type}></Stock>
        // console.log(stock)
      }
      )}
    </div>
  );
}

export default StockContainer;
