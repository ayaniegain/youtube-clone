import React from 'react'

const numbersList = [];

for (let i = 1; i <= 30; i++) {
  numbersList.push(i);
}

console.log(numbersList);

const Card=()=>{
    return(
        <div className='p-2 m-2 w-72 ml-9 h-72 shadow-md bg-gray-100'>
        <div className='w-full bg-gray-400 h-36'>
            
        </div>
    </div>
    )
}
const Shimmer = () => {
  return (
    <div className='flex flex-wrap'>
      {
        numbersList.map((num,index)=> <Card key={index} />)
      }
    </div>
  )
}

export default Shimmer