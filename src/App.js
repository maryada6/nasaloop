import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { coin } from "./coinapi";
import NavbarComp from "./NavbarComp";
import { Card, CardGroup, ListGroup, ListGroupItem } from "react-bootstrap";
function App() {
  let json = require("./data.json");

  const [coins, setCoins] = useState(json.coins);
  useEffect(() => {
    const data = coin(20);
    data.then((response) => {
      setCoins(response);
    });
  }, []);

  function getRandomColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}
  

  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <div className="cards">
        {coins.map((coinEle) => (
          <Card border="primary" style={{backgroundColor:getRandomColor()}} className="card">
            <Card.Body>
              <Card.Title>
                {coinEle.name}{" "}
                <Card.Img
                  variant="top"
                  style={{ maxWidth: "40px" }}
                  src={coinEle.icon}
                  alt={coinEle.id}
                />
              </Card.Title>
              <Card.Text>
                <p> Symbol : {coinEle.symbol}</p>
                <p> Rank : {coinEle.rank}</p>
                <p> Price : RS {coinEle.price.toFixed(2)}</p>
                {/* <p> PriceBTC : {coinEle.priceBtc}</p> */}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush" style={{textAlign:"left"}}>
              <ListGroupItem>Volume: {coinEle.volume.toFixed(2)}</ListGroupItem>
              <ListGroupItem>
                Market Cap: {coinEle.marketCap.toFixed(2)}
              </ListGroupItem>
              <ListGroupItem>
                Available Supply: {coinEle.availableSupply.toFixed(2)}
              </ListGroupItem>
              <ListGroupItem>
                Total Supply: {coinEle.totalSupply.toFixed(2)}
              </ListGroupItem>
              <ListGroupItem>
                Price Change 1 hour: {coinEle.priceChange1h}
              </ListGroupItem>
              <ListGroupItem>
                Price Change 1 day: {coinEle.priceChange1d}
              </ListGroupItem>
              <ListGroupItem>
                Price Change 1 Week: {coinEle.priceChange1w}
              </ListGroupItem>
            </ListGroup>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
