import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Third() {
  return (
    <div className='bg-black sticky top-0 ' style={{width:"250px",height:"600px",postion:"relative"}} >
      <input className='rounded-3xl border border-gray-800' placeholder="search..." style={{width:"210px" , height:"40px" , marginLeft:"20px",marginTop:"15px",color:"black",paddingLeft:"55px"}}/>
      <SearchIcon className='text-black absolute top-6 left-9'/>

      <div className='border border-gray-500' style={{width:"190px",height:"180px" , marginLeft:"30px" , marginTop:"30px" }}>
      <span style={{color:"white"}} className="font-bold pl-3 text-1xl">Subscribe to premium</span>
      <p className='text-gray-400 pt-3 pl-3'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
      <button className='rounded-full bg-blue-400 p-1 mt-2 ml-3 hover:bg-blue-500'>Subscribe</button>

      <div className='border border-gray-400' style={{width:"190px" , height:"180px",marginTop:"30px"}}>
      <span className='font-bold text-white pl-5'>What's Happening?</span>
      <p className='text-white pl-2 pt-2'>Tomorrowland Winter <br/></p>
      <span className='text-gray-400 pl-2'>Music Festival·LIVE</span><br/>


      <span className='text-gray-400 pl-2 mt-4'>Politics · Trending</span>
      <p className='text-gray-400 pl-2 pt-2'>R.Sharma</p>
      <p className='text-gray-400 pl-2 pt-2'>Gambhir</p>
      </div>

      </div>
    </div>
  )
}

export default Third
