import React from "react";
import ProductCard1 from "./components/ProductCard1";

function App() {
  return <div className="App" style={{backgroundColor:"red",height:300,width:300}} >
    <ProductCard1 prop1={"price"} />
  </div>;
}

export default App;
