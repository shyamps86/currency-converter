import React from 'react'
import CurrecyConvertor from './currencyConverter/currency-convertor';
const App=()=>{
  const arr=[1,2,3,4,5]
  const reduce=(arr)=>{
      return arr.reduce((value,sum)=>
       value+sum
     ,0)
    
  }
  console.log(reduce(arr));
  return(
   <div className='container'>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
          <CurrecyConvertor/>
        </div>
        <div>
           
        </div>
    </div>
  )
}
export default App;