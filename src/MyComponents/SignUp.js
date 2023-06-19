import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const[display,setDisplay]=useState(false);
  return (
    <div>
      <div className='container'>
          <div>
          <div className={!display?"signin_padding":"main_button"}>
          <button className='sign' onClick={()=>setDisplay(true)}>Sign Up</button>
          <button className='sign' onClick={()=>setDisplay(false)}>Sign In</button>
          </div>
          {display? <div>
            <h1>Sign Up</h1>
             
              <div className='name_container'>
      <input type="text"  placeholder='First Name' className='name'/>
       <input type="text"  placeholder='Last Name' className='name name_container' />
       <div className='other_container'>
       <input type="email" placeholder='Email' className='otherfield'/>
       
       </div>
       <div className='other_container'>
       <input type="password" placeholder='Password' className='otherfield'/>
       </div>
       <button className='login'>Sign Up</button>
    </div>
    </div> :<div>
            <h1>Sign In</h1>
             
           <div>   
       <div className='other_container'>
       <input type="email" placeholder='Email' className='otherfield'/>
       
       </div>
       <div className='other_container'>
       <input type="password" placeholder='Password' className='otherfield'/>
       </div>
       <button className='login'>Sign In</button>
    </div>
    </div> } 
          </div>
      </div> 
    </div>
  )
}

export default SignUp