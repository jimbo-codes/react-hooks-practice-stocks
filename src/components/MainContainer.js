import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stocks, portfolio, addPortfolio,removePortfolio,alphabetSort,pxSort,filteredSort}) {
  // use to pass props down to these three components
const [ search, setSearch] = useState('')
  function filteredSort(event){
    let search = event.target.value
    setSearch(search);
  }
  return (
    <div>
      <SearchBar 
      search={search}
      alphabetSort={alphabetSort}
      pxSort={pxSort}
      filteredSort={filteredSort}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
          search={search}
          addPortfolio = {addPortfolio}
          stocks = {stocks}
          portfolio={portfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer 
          portfolio = {portfolio}
          removingPortfolio={removePortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
