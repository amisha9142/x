import React , {useState} from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import ReplyAllRoundedIcon from '@mui/icons-material/ReplyAllRounded';
import PollRoundedIcon from '@mui/icons-material/PollRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const dataArray = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/190/150",
      like: 890,
      comment: 510,
      share:999,
      poll:234
    },
    {
      name: "Alice Smith",
      email: "alice.smith@example.com",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/180/150",
      like: 1590,
      comment: 890,
      share:899,
      poll:345
    },
    {
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://picsum.photos/120/150",
      like: 334,
      comment: 1289,
      share:340,
      poll: 999
    },
    // Add 20 more objects
    {
      name: "Emily Brown",
      email: "emily.brown@example.com",
      description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
      image: "https://picsum.photos/130/150",
      like: 865,
      comment: 334,
      share:409,
      poll:220
    },
    {
      name: "Michael Wilson",
      email: "michael.wilson@example.com",
      description: "Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada.",
      image: "https://picsum.photos/149/150",
      like: 1200,
      comment: 678,
      share:699,
      poll:190
    },
    {
      name: "Emma Davis",
      email: "emma.davis@example.com",
      description: "Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
      image: "https://picsum.photos/147/150",
      like: 1809,
      comment: 956,
      share:706,
      poll:289
    },
    {
      name: "James Wilson",
      email: "james.wilson@example.com",
      description: "Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.",
      image: "https://picsum.photos/148/150",
      like: 295,
      comment: 143,
      share:323,
      poll:366
    },
    {
      name: "Olivia Martin",
      email: "olivia.martin@example.com",
      description: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
      image: "https://picsum.photos/157/150",
      like: 300,
      comment: 184,
      share:809,
      poll:24
    },
    {
      name: "William Martinez",
      email: "william.martinez@example.com",
      description: "Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
      image: "https://picsum.photos/150/150",
      like: 509,
      comment: 278,
      share:709,
      poll:689
    },
    {
      name: "Sophia Garcia",
      email: "sophia.garcia@example.com",
      description: "Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat.",
      image: "https://picsum.photos/156/150",
      like: 867,
      comment: 409,
      share:349,
      poll:907
    },
    {
      name: "Benjamin Rodriguez",
      email: "benjamin.rodriguez@example.com",
      description: "Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat.",
      image: "https://picsum.photos/155/150",
      like: 119,
      comment: 767,
      share:369,
      poll:967
    },
    {
      name: "Isabella Lopez",
      email: "isabella.lopez@example.com",
      description: "Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
      image: "https://picsum.photos/154/150",
      like: 160,
      comment: 934,
      share:904,
      poll:120
    },
    {
      name: "Mason Perez",
      email: "mason.perez@example.com",
      description: "Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada.",
      image: "https://picsum.photos/153/150",
      like: 200,
      comment: 172,
      share:235,
      poll:908
    },
    {
      name: "Camila Gonzalez",
      email: "camila.gonzalez@example.com",
      description: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
      image: "https://picsum.photos/152/150",
      like: 105,
      comment: 908,
      share:789,
      poll:134
    },
    {
      name: "Noah Lee",
      email: "noah.lee@example.com",
      description: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada.",
      image: "https://picsum.photos/151/150",
      like: 1568,
      comment: 9010,
      share:199,
      poll:245
    },
    {
      name: "Ava Harris",
      email: "ava.harris@example.com",
      description: "Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula",
      image: "https://picsum.photos/160/150",
      like: 1290,
      comment: 4514,
      share:999,
      poll:234
    }
]


function Api() {

const[isLike,setIsLike] = useState(false)
const[click,setClick] = useState(dataArray[0].like)
const btnClicked = () =>{
    setIsLike(!isLike)
    setClick((prevClick) => prevClick + (isLike ? -1 : 1))
}


    return (
        <div>
          {dataArray.map((item, index) => (
            <div key={index}>

            <div className="flex mt-6 ml-9">
            <button>
            <img src={item.image} alt={item.name} style={{ width: "40px", height: "40px", marginRight: "20px" , borderRadius:"50px"}} />
            </button>
            
            <span className="font-semibold text-2xl">
            {item.name}&nbsp; &nbsp; &nbsp; &nbsp;
             <VerifiedIcon style={{color:"blue"}}/>&nbsp; 
          
            </span>
            <p className='font-semibold mt-1'>
            {item.email}
            </p>
            <br/>
            </div>


            <div style={{marginLeft:"100px"}} className="font-semibold">
            {item.description}
            <br/>
              <img src={item.image} alt={item.name} style={{width:"450px",height:"300px",marginTop:"10px",marginBottom:"5px"}} className="rounded-md"/>
            </div>

            <div style={{marginLeft:"120px"}}>
            <button onClick={btnClicked}>
                {isLike ? <FavoriteRoundedIcon style={{color:"red"}}/> :   <FavoriteBorderIcon /> }
            </button>
             &nbsp;
             {click}
            
            <MapsUgcRoundedIcon style={{marginLeft:"60px"}}/>&nbsp;{item.comment}
            <ReplyAllRoundedIcon style={{marginLeft:"60px"}}/>&nbsp;{item.share}
            <PollRoundedIcon style={{marginLeft:"60px"}}/>&nbsp;{item.poll}
            </div>
            </div>
          ))}
        </div>
      );
    }
    
export default Api;