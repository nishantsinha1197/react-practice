import React, { useState } from 'react'

function Login() {
    const user={
        email:'admin@gmail.com',
        password:'admin1234'
    }
    const [details, setDetails] = useState({ name: '', email: '', password: '', cpassword: "" })
    function commonHandler(e){
        setDetails((pre)=>{
            let {name,value} = e.target
            return {...pre, [name]:value}
        })
    }
    function submitHandler(e){
        e.preventDefault()
        let { name, email, password , cpassword }= details
        console.log(name, email, password , cpassword);
        setDetails({ name: "", email: '', password: '', cpassword: "" })
        if(user.email===details.email && user.password===details.password){
            console.log('User logged in successfully');
        }
        else{
            console.log('Either email or password is incorrect');
        }
    }    
    return (
        <div>
            <form>
                Usename : <input type='text' name='name' onChange={commonHandler} value={details.name}/> <br />
                Email:   <input type='email' name='email' onChange={commonHandler} value={details.email}/> <br />
                Password: <input type='password' name='password' onChange={commonHandler} value={details.password} /> <br />
                Confirm Password : <input type='password' name='cpassword' onChange={commonHandler}  value={details.cpassword}/><br/>
               <button onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default Login
