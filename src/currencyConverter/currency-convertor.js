import React, { useEffect,useState } from 'react'
import { GoArrowSwitch } from "react-icons/go";

import DropDown from './dropDrown'
const CurrecyConvertor = () => {
    const [currencies,setCurrencies]=useState([]);
    const [fromCurrency,setFromCurrency]=useState('USD');
    const [toCurrency,setToCurrency]=useState('INR');
    const [amount,setAmount]=useState(1);
    const [convertedAmount,setConvertedAmount]=useState(20);
    const fetchingCurrencies=()=>{
        fetch('https://api.frankfurter.app/currencies')
        .then((data)=>data.json())
        .then((each)=>setCurrencies(Object.keys(each)))
        .catch((err)=>console.log("error"));
    }

    useEffect(()=>{
        fetchingCurrencies();
    },[])
    
     const fetchConvertAmount=async ()=>{
        try{
            const data=await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
            const each= await data.json();
            setConvertedAmount(each.rates[toCurrency]);
        }
        catch(err){
            console.error(err);
        }
     }
     const render=()=>{
        console.log(currencies);
       }
     useEffect(()=>{
       render()
     })

     const swapCurrencies=()=>{
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
     }
    
  return (
    <div className=' max-w-xl bg-white shadow-md mx-auto my-10 rounded-lg p-5'>
        <h1 className='flex justify-center items-center text-2xl mb-5'>currency converter</h1>
         
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 items-end'>
            <DropDown currencies={currencies} title={"From"} Currency={fromCurrency} setCurrency={setFromCurrency}/>
              <div>
                 <button className='rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300 content-center p-3' onClick={()=>{swapCurrencies()}}><GoArrowSwitch /></button>
              </div>
            <DropDown currencies={currencies} title={'To'} Currency={toCurrency} setCurrency={setToCurrency}/>

          </div>

         <div>
            <label htmlFor='amount'><h6>Enter amount</h6></label>
         </div>
         <div>
            <input id='amount' type='number' className='rounded-xl w-full outline-black bg-gray-300 p-1'
              value={amount} onChange={(e)=>setAmount(e.target.value)}
            />
         </div>
       <div className='flex justify-end mt-3 '>
         <button onClick={()=>{fetchConvertAmount()}} className=' px-3 py-2 text-white rounded-md bg-indigo-600 hover:bg-indigo-700'>convert</button>
       </div>
       <div className='text-green text-right mt-4 text-lg'>
         converted the price into:{convertedAmount}
       </div>
    </div>
  )
}

export default CurrecyConvertor