import React from "react";
import ProductCard1 from "./components/ProductCard1";

function App() {
  return <div className="App" style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}} >
    <ProductCard1 prop1={"price"} />
  </div>;
}

export default App;
