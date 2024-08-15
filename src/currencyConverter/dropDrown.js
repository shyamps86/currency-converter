import React from 'react'

const DropDown = ({
    currencies,
    title,
    Currency,  
    setCurrency
  }) => 
    {
        return (
            <div className='relative'>
                <h2 className='font-semibold '>
                    {title}
                </h2>
                <div>
                    <select className='w-full bg-gray-200 shadow-sm rounded-xl p-2 mr-10' value={Currency} onChange={(e)=>setCurrency(e.target.value)}>
                    {
                        currencies.map((value)=>{
                            return(
                                <option key={value}>
                                    {value}
                                </option>
                            )
                          })
                        }
                    </select>
                </div>
                
            </div>
        )
}

export default DropDown