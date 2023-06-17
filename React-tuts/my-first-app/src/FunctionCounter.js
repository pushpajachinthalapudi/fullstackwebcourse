import React from 'react'
import { useState } from "react";
import { useEffect } from "react";

export default function FunctionCounter() {
  
    const [count, changeState]= useState(0)
    useEffect=(()=>{
      document.title = `Count is ${count}`
      alert("hii")
    })
  return (
    <div>
      <button onClick={()=> changeState(count+1)}>Increment(function) Count:{count}</button>
    </div>
  )
}
