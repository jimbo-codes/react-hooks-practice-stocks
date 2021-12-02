import React,{useRef} from "react";

function Stock({name, id, portfolio, price, ticker, type, addPortfolio, inPortfolio, removePortfolio}) {
  // pass down the props after fetching, put them in to dynamically show here.
  //name, stock price, type, ticker
  // onClick={addPortfolio}
  //handle setting all the information here before passing...
  function addToPortfolio(){
  // console.log(portfolio);
  const newPort = {
    name: name,
    ticker: ticker,
    price: price,
    type: type,
    id: portfolio.length,
  }
  addPortfolio(newPort);
}
  //inPortfolio()? true = > remove, false = this.
  

function removeFromPortfolio(){
  // setup the object, and pass it back up?
  console.log(id)
  // useRef(portfolio.length)
  const oldPort = {
    // set this equal to the original
    name: name,
    ticker: ticker,
    price: price,
    type: type,
    id: id
  }
  // console.log(portfolio);
  removePortfolio(oldPort);
}
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" onClick={inPortfolio?() => removeFromPortfolio():() => addToPortfolio(portfolio)}>{name}</h5>
          <p className="card-text" onClick={inPortfolio?() => removeFromPortfolio(portfolio):() => addToPortfolio(portfolio)}>{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
