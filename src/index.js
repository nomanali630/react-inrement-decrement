import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Nomi() {
    const [value,setValue] =   useState(true)
    var brightness = (value === true)? "bright" :"dark"

  function change() {

    setValue(preValue=>{
      return !preValue
    })

  }
  return(
    <div className = {`ghar ${brightness}`}>
      <div>
        the room is {brightness}
      </div>
      <button onClick = {change}>change</button>
    </div>
  )
}

function Count() {
  const [value, setValue] = useState(0)

  function increase() {

    setValue(increase => {
      return increase + 1
    })
  }
  function decrease() {

    setValue(decrease => {
      return decrease - 1
    })

  }
  return (
    <div>
      <button onClick={increase}>++++++++</button>
      <h1>{value}</h1>
      <button onClick={decrease}>--------</button>
    </div>
  )

}


ReactDOM.render(
   <Nomi/>,
  <Count />
  ,
  document.getElementById('root')
);