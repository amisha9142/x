import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';



function Signin() {
  const [password,setPassword] = useState(false)
 
  return (
    <>
     <div className='border shadow-xl border-black text-center m-auto rounded-l-2xl relative' 
     style={{height:"350px" , width:"550px",marginTop:"60px",overflow:"auto"}}>
         <ion-icon name="logo-twitter" size="large" style={{marginTop:"20px",color:"blue"}}></ion-icon><br/>
         <h1 className='text-4xl font-bold'>Sign in to Twitter</h1><br/><br/>

         <div style={{position:"absolute" , top:"10px",left:"10px",cursor:"pointer"}}>❌</div>
         
        <div className='relative'>
         <button className='rounded-full border border-blue-500 hover:bg-gray-100' 
         style={{padding:"10px 100px"}}
         >Sign in with Google</button>
        </div>
        <div className='absolute' style={{top:"160px",left:"170px",color:"blue"}}>
        <ion-icon name="logo-google"></ion-icon>
        </div><br/>

        <div className='relative'>
         <button className='rounded-full border border-blue-500 hover:bg-gray-100' 
         style={{padding:"10px 100px"}}
         >Sign in with Apple</button>
        </div>
        <div className='absolute' style={{top:"230px",left:"170px"}}>
        <ion-icon name="logo-apple"></ion-icon>
        </div>

        <div className='flex flex-row'>
        <hr style={{width:"10rem",marginLeft:"100px"}} className='border-gray-500 mt-5'/>
        <h1 style={{top:"50px"}}>or</h1>
        <hr style={{width:"10rem"}} className='border-gray-500 mt-5'/>
        </div>

        {/* <input className='py-3 px-3 mt-5 border border-gray-400 hover:border-black' 
        style={{width:"300px"}}
        placeholder='Email'/>
        <br/>

       
        <input className='py-3 px-3 mt-5 border border-gray-400 hover:border-black' 
        style={{width:"300px"}}
        type={password ? "text" : "password"}
        placeholder='password'/>
       <ion-icon name={password ? "eye-outline" : "eye-off-outline"}
        onClick = {()=>setPassword(!password)}
        style={{position:"absolute" , left:"390px", top:"390px"}}
        ></ion-icon><br/><br/> */}

        
<TextField
  id="outlined-basic"
  label="Email"
  variant="outlined"
  style={{ width: "320px" }}
  InputProps={{
    className: 'px-3 mt-4 '
  }}
/>

    <TextField
      id="outlined-basic"
      label="Password"
      variant="outlined"
      style={{ width: "320px" }}
      type={password ? "text" : "password"}
      InputProps={{
        className: 'px-3 mt-4',
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setPassword(!password)}
              edge="end"
            >
              {password ? <VisibilityIcon/> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />

       
        <button className='bg-black font-bold text-white rounded-2xl
        hover:bg-gray-800 mt-5'
        style={{width:"300px",height:"50px"}}
        >Login</button><br/><br/>

        <button className='text-blue-500 border border-blue-500 rounded-2xl
        hover:bg-blue-100 font-semibold'
        style={{width:"300px",height:"50px"}}
        >forgot password?</button><br/><br/>
        <h1>Don't have an account? 
        <button className='underline text-blue-700' 
        >
        <Link to ='/signup'>Signup</Link>
        </button></h1><br/>
     </div>
    </>
  )
}

export default Signin
