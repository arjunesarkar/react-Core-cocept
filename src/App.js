import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayok =["Manna", "Amin", "Sakib", "Bubli"]
  const products= [
    {name:'Photoshop', price:'$ 200.30'},
    {name:'Ilstator', price:'$ 150.30'}
  ]
  const productName = products.map(product =>product)
  console.log(productName)
  const person = {
     name : 'Kaled rohman',
     Id : 252695,
     phone : 8801724352695,


  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {
            nayok.map(nayok => <li>{nayok}</li>)
          }
          <li>{nayok[0]}</li>
          <li>{nayok[1]}</li>
          <li>{nayok[2]}</li>
        </ul>
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1>This is my Webside: {person.name +" "+ person.Id +" " + person.phone}</h1>
       <p>My first react project</p>
          <Product name={products[0].name} price={products[0].price}></Product>
          <Product name={products[1].name} price={products[1].price}></Product>
          <Position name="Sakib Khan"></Position>
          <Position name="Manna"></Position>
          <Position name= "Elias kanchon"></Position>
          <Position name="Hiro Alom"></Position>
          <Users></Users>
          <Counter></Counter>
          
       <h1>React project</h1>
      </header>
    </div>
  );
  function Users(){
    const [posts ,setpost] = useState([])
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res =>res.json())
      .then(data => setpost(data))
    }, [] )
    return (
      <div>
        <h3>user post {posts.length}</h3>
        {
          console.log(posts)
        }
        {
          posts.map(post =><li>{post.title}</li>)
        }
      </div>
    )
  }
  function Position(props){
   const positionStyle={
      backgroundColor : 'green',
      border : '2px solid yellow',
      margin: '20px'
   } 
    return(
     <div style= {positionStyle}>
      <h1>Name: {props.name}</h1>
      <h3>He is a honest person</h3>
    </div>
    )
  }
}

  function Product(props){
      const productStyle={
      backgroundColor:'black',
      height:'200px',
      width:'200px',
      border:'2px solid gray',
      float:'left'
    }
    return (
      <div style={productStyle}>
        <h3>{props.name}</h3>
        <h1>{props.price}</h1>
        <button>Buy Now</button>
      </div>
    )
  }
  function Counter(){
    const [count, setcount] = useState(10);
    // const handelclick =() =>setcount(setcount-1); 
    return (
    <div>
      <h1>count :{count}</h1>
      <button onClick={() =>setcount(count-1)}>Dicrice</button>
      <button onClick={ () =>setcount(count+1)}>Incrase</button>
    </div>
    )
  }

export default App;
