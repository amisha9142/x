import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';



function Signup() {
  const[password,setPassword] = useState(false)
  return (
    <>
     <div className='border border-black text-center m-auto rounded-l-2xl relative' 
     style={{height:"350px" , width:"550px",marginTop:"60px",overflow:"auto"}}>
         <h1 className='text-4xl font-bold mt-8'>Create Your Account</h1><br/><br/>

        <div style={{position:"absolute" , top:"10px",left:"10px",cursor:"pointer"}}>❌</div>

<TextField
  id="outlined-basic"
  label="Name"
  variant="outlined"
  style={{ width: "400px" }}
  InputProps={{
    className: 'px-3 mt-1  hover:border-black'
  }}
/>


<TextField
  id="outlined-basic"
  label="Email"
  variant="outlined"
  style={{ width: "400px" }}
  InputProps={{
    className: 'px-3 mt-4 '
  }}
/>

         <TextField
      id="outlined-basic"
      label="Password"
      variant="outlined"
      style={{ width: "400px" }}
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

        <h1 className='font-bold text-2xl mt-5' style={{paddingRight:"250px"}}>Date of birth</h1>
        <p style={{paddingLeft:"0px"}}>This will not be shown publicly. Confirm your own age,<br/> even if this accunt is for a business, or something else.</p>
        <br/>

        <div className='flex'>
        <input type="time" className='border border-black'
         style={{marginLeft:"70px",width:"100px"}}/>
        <select className='border border-black'
         style={{width:"100px", marginLeft:"40px"}}>
         <option>Month</option>
         <option>january</option>
         <option>february</option>
         <option>march</option>
         <option>april</option>
         <option>may</option>
         <option>june</option>
         <option>july</option>
         <option>august</option>
         <option>september</option>
         <option>october</option>
         <option>november</option>
         <option>december</option>
        </select>
        <select className='border border-black'
         style={{width:"100px", marginLeft:"40px"}}>
         <option>Year</option>
         <option>2002</option>
         <option>2003</option>
         <option>2004</option>
         <option>2005</option>
         <option>2006</option>
         <option>2007</option>
        </select>
        </div>

      
        <br/>
        <button className='bg-blue-400 font-bold text-white rounded-2xl
        hover:bg-blue-600'
        style={{width:"400px",height:"50px"}}
        >Signup</button><br/><br/>

</div>
    
    </>
  )
}

export default Signup
