import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio,removingPortfolio}) {
  // pass down isportfolio
  const isPortfolio = true;
    function handlePortfolio(item){
      // could do event target hide, but would rather remove from array.
      console.log(item);
      console.log(portfolio);
      // const newPort=portfolio.filter(stock=> {
      //   console.log(stock)
      //   // need to have item id. stock !== item id.
      //    return stock.id !==item.id
      // })
      removingPortfolio(item);
      
    }
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map((stock) => {
        // console.log(stock)
        // top level to "stocks" you include your filtering.
        // setUpPortfolio(true)
       return <Stock portfolio={portfolio} id={stock.id} removePortfolio={handlePortfolio} inPortfolio={isPortfolio} key={stock.name} name={stock.name} price={stock.price} ticker={stock.ticker} type={stock.type}></Stock>
        // console.log(stock)
      }
      )}    </div>
  );
}

export default PortfolioContainer;
