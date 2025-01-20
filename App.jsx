import { useState } from 'react'
import './App.css'

function counter() {
  const [visible, setVisibility] = useState(true)
  const toogleBackground = ()=>{
    if(visible){
      document.body.classList.remove('background-two');
      document.bodt.classList.add('background one');
    }else{
      document.body.classList.remove('background-one');
      document.body.classList.add('background-one');
    }
  }
  return (
    <>
    <div className='card'>
      <h1>Toogle</h1>
      <button onClick={()=>{
        setVisibility(!visible)
        toogleBackground()}}>Toogle here</button>
        <p className= {visible ? 'visible': 'hidden'}>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>

    </div>
     
    </>
  )
}

export default counter
