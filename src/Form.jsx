import React from 'react'
import XIcon from '@mui/icons-material/X';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShareIcon from '@mui/icons-material/Share';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import SupervisedUserCircleTwoToneIcon from '@mui/icons-material/SupervisedUserCircleTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import PlaceIcon from '@mui/icons-material/Place';
import PublicIcon from '@mui/icons-material/Public';
import Api from './Api';
import Third from './Third';

function Form() {

  return (
    <div className='flex'>
      <div className='border border-black bg-black text-white min-h-screen sticky top-0 flex flex-col' style={{width:"12vw",height:"20vh",overflowY:"scroll"}}>
      <XIcon style={{marginTop:"20px",marginLeft:"28px",fontSize: '3rem', padding:"5px 3px"}}/> 


      <HomeIcon sx={{marginTop:"30px",marginLeft:"28px",fontSize: '3rem', padding:"5px 3px",borderRadius:"50px",   '&:hover': { backgroundColor: '#28324A'}
    }}/>

      <SearchIcon sx={{marginTop:"30px",marginLeft:"28px",fontSize: '3rem', padding:"5px 3px",borderRadius:"50px",   '&:hover': { backgroundColor: '#28324A'}
    }}/>

<NotificationsOutlinedIcon sx={{marginTop:"30px",marginLeft:"28px",fontSize: '3rem', padding:"5px 3px",borderRadius:"50px",   '&:hover': { backgroundColor: '#28324A'}
    }}/>

      <EmailOutlinedIcon sx={{marginTop:"30px",marginLeft:"28px",fontSize: '3rem', padding:"5px 3px",borderRadius:"50px",   '&:hover': { backgroundColor: '#28324A'}
    }}/>

      <CloudDownloadOutlinedIcon sx={{marginTop:"30px",marginLeft:"28px",fontSize: '3rem', padding:"5px 3px",borderRadius:"50px",   '&:hover': { backgroundColor: '#28324A'}
    }}/>
     <LanguageOutlinedIcon sx={{marginTop:"30px",marginLeft:"28px",fontSize: '3rem',
      padding:"5px 3px",borderRadius:"50px",   '&:hover': { backgroundColor: '#28324A'}
    }}/>
   
    <ShareIcon  sx={{marginTop: "30px",marginLeft: "28px",fontSize: '3rem',display:"flex",borderRadius:"50px" ,
    padding:"5px 3px"
    ,'&:hover': { backgroundColor: '#28324A'
    }}}/>
    <PersonOutlinedIcon sx={{marginTop:"30px",marginLeft:"28px",fontSize: '3rem',
     padding:"5px 3px",borderRadius:"50px",   '&:hover': { backgroundColor: '#28324A'}}}
    />
    <PendingOutlinedIcon sx={{marginTop:"30px",marginLeft:"28px",fontSize: '3rem',
     padding:"5px 3px",borderRadius:"50px",   '&:hover': { backgroundColor: '#28324A'}
    }}/>
    <HistoryEduOutlinedIcon sx={{marginTop:"30px",marginLeft:"28px",fontSize: '3rem',
     padding:"5px 3px",borderRadius:"50px",  backgroundColor: '#28324A'
    }}/>
     <SupervisedUserCircleTwoToneIcon sx={{marginTop:"30px",marginLeft:"28px",fontSize: '3rem',
      padding:"5px 3px",borderRadius:"50px",   '&:hover': { backgroundColor: '#28324A'}
    }}/>
     
  
      </div>

    <div className='border border-black' style={{width:"63vw"}}>
    <div className='border border-black sticky top-0 flex bg-black
       text-gray-400 font-semibold' style={{width:"63vw",height:"6vw"}}>

    <span className='pt-5 hover:bg-gray-800 hover:text-white'
      style={{paddingLeft:"160px",paddingRight:"90px",cursor:"pointer"}}
      >For&nbsp;You
    </span>
     <span className='pt-5 hover:bg-gray-800 hover:text-white'
     style={{paddingLeft:"90px",paddingRight:"150px",cursor:"pointer",}}
     >Following
     </span>
      <SettingsTwoToneIcon sx={{ marginTop: "23px",color:"white"}}/>
      </div>
        

      <div className='border border-black ' style={{width:"63vw",
      height:"1600vh"}}>
      <hr style={{color:"grey"}}/>

         <div className='border border-black bg-black ' style={{height:"30vh",width:"63vw"}}>
         <AccountCircleTwoToneIcon sx={{fontSize:"3rem",marginLeft:"28px",marginTop:"10px",color:"lightblue"}}/> 
         <span className='text-2xl font-semibold text-gray-400' style={{paddingLeft:"15px"}}>What is Happening?!
         </span><br/>
         <p className='text-blue-600 font-semibold' style={{paddingLeft:"100px"}}><PublicIcon/>&nbsp; &nbsp;everyone can reply
         </p>
         
         <PermMediaIcon sx={{color:"lightblue",marginLeft:"80px",marginTop:"10px",
         borderRadius:"50px" ,padding:"5px 3px",fontSize:"2rem",'&:hover': { backgroundColor: '#28324A'}
         }}/>
        
         <GifBoxIcon sx={{color:"lightblue",marginLeft:"10px",marginTop:"10px",
         borderRadius:"50px" ,padding:"5px 3px",fontSize:"2rem",'&:hover': { backgroundColor: '#28324A'}
         }}/>

         <PollIcon sx={{color:"lightblue",marginLeft:"10px",marginTop:"10px",
         borderRadius:"50px" ,padding:"5px 3px",fontSize:"2rem",'&:hover': { backgroundColor: '#28324A'}
         }}/>

        <EmojiEmotionsIcon sx={{color:"lightblue",marginLeft:"10px",marginTop:"10px",
         borderRadius:"50px" ,padding:"5px 3px",fontSize:"2rem",'&:hover': { backgroundColor: '#28324A'}
         }}/>

         <ManageHistoryIcon sx={{color:"lightblue",marginLeft:"10px",marginTop:"10px",
         borderRadius:"50px" ,padding:"5px 3px",fontSize:"2rem",'&:hover': { backgroundColor: '#28324A'}
         }}/>

         <PlaceIcon sx={{color:"lightblue",marginLeft:"10px",marginTop:"10px",
         borderRadius:"50px" ,padding:"5px 3px",fontSize:"2rem",'&:hover': { backgroundColor: '#28324A'}
         }}/>
         
         <button className='rounded-full bg-blue-400 hover:bg-blue-500 font-semibold' 
         style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"8px",paddingBottom:"8px",marginLeft:"200px",marginBottom:"1px",marginTop:"2px"}}
         >Post</button>
         </div>

         <Api/>
      </div>

      
      </div>
      <Third/>
    </div>
  )
}

export default Form
