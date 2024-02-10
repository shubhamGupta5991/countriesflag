import axios from 'axios'
import React, { useEffect, useState } from 'react'

 const Countries = () => {
    const [data,setData] = useState([])
 async  function apiCall(){
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/all`);
        console.log(response.data)
        setData(response.data)
        
    } catch (e) {
        console.log(e)
    }
        
   }
//    console.log(data);
   useEffect(()=>{
       apiCall()

   },[data])


  return (
    <div style={{display:'flex', flexWrap:'wrap', gap:'25px', fontWeight:'bold'}}>
        {
            data.map((country)=>(
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center' ,width:'150px',height:'150px',border: '2px solid gray', borderRadius:'5px'}}>
                    <img src={country.flags.png} alt="country-flag" style={{width: '100%',height:'120px',objectFit:'cover',overflow:'hidden'}} />
                    <p style={{textAlign:'center',width:'100%', height:'50px'}}>{country.name.common}</p>
                </div>
            ))
        }

        
       
    </div>
  )
}


export default Countries
