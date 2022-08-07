import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { UilMapPinAlt,UilSun, UilSunset,UilCloudSun} from '@iconscout/react-unicons'

function App(){
    const[city,ncity]=useState(null);
    const [srch,nsrch]=useState('ghaziabad');

    useEffect(()=>{
        const fetchapi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${srch}&units=metric&appid=a0471e38a812de9e3b9511b41bbfd717`
            const res=await fetch(url);
            const resjs=await res.json();
ncity(resjs.main);
        }
        fetchapi();
    },[srch])
  
   return(
    <>
    <div className="bg-gradient-to-br  from-blue-800 to-green-300 h-fit m-auto mt-3 py-5 px-28 max-w-screen-md rounded-lg">
    <div className="flex items-center justify-center">
<input type="search" placeholder="Search.." onChange={(ip)=>{nsrch(ip.target.value)}} value={srch} className='rounded-3xl h-8 focus:outline-none text-xl p-2'/>
</div>
{
  !city ? (
    <p>No Result</p>
  ) : (
    <div>
<div className="flex items-center justify-center mt-7">
<span><UilMapPinAlt size={50} className="px-2 "/></span>
<p className="text-2xl font-medium text-white px-4 uppercase ">{srch}</p>
</div>
<div className="flex items-center justify-center">
  <p className="text-5xl py-6 font-semibold text-red-200">{city.temp}<span className="text-2xl font-light text-white px-2">°C</span></p>

</div>
<div className="flex flex-row items-center justify-center mt-7">

     <span className="mx-5">
     <UilSun/>
       <p className='font-light'>High: <span className='font-medium ml-1'>{city.temp_max}°C</span></p></span>
     <p>|</p>
     <span className="mx-5">
     <UilSun/>
       <p className='font-light'>Low: <span className='font-medium ml-1'>{city.temp_min}°C</span></p></span>

</div>
</div>
  )
}

</div>

 </>   
   )
}
export default App;