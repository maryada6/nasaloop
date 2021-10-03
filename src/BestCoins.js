import React from 'react'
import { useState} from 'react';
import {coin} from "./coinapi";
import {Card,CardGroup,ListGroup,ListGroupItem} from 'react-bootstrap'
export default function BestCoins(limit=20) {
    let json = require('./data.json');
    const [coins, setCoins]=useState(json.coins);
    // console.log(coins);

    const data = coin(20);
    data.then(response=>{
        setCoins(response);
    })

    return (
        <div className="">
            <CardGroup>
            {
            
            coins.map((coinEle)=>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{maxWidth:"40px"}} src={coinEle.icon} alt={coinEle.id} />
            <Card.Body>
              <Card.Title>{coinEle.name}</Card.Title>
              <Card.Text>
                <p> Symbol : {coinEle.symbol}</p>
                <p> Rank : {coinEle.rank}</p>
                <p> Price : RS {coinEle.price}</p>
                {/* <p> PriceBTC : {coinEle.priceBtc}</p> */}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroupItem>Volume: {coinEle.volume}</ListGroupItem>
            <ListGroupItem>Market Cap: {coinEle.marketapC}</ListGroupItem>
            <ListGroupItem>Available Supply: {coinEle.availableSupply}</ListGroupItem>
            <ListGroupItem>Total Supply: {coinEle.totalSupply}</ListGroupItem>
            <ListGroupItem>Price Change 1 hour: {coinEle.priceChange1h}</ListGroupItem>
            <ListGroupItem>Price Change 1 day: {coinEle.priceChange1d}</ListGroupItem>
            <ListGroupItem>Price Change 1 Week: {coinEle.priceChange1w}</ListGroupItem>
                
            </ListGroup>
          </Card>
            )
            }
            </CardGroup>
        </div>
    )
}
