import React,{useState} from 'react'
import Form from '../components/Form'
import { login } from '../services/auth'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'

function Login() {
  const navigate=useNavigate()
  const token = localStorage.getItem("token");
  if (token) {
      navigate("/");
  }
  const [formData,setFormdata] =useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    checkbox:false,
    mobile:''
  })
  const [error, setError] = useState({
    name:false,
    email:false,
    password:false,
    confirmPassword:false,
    checkbox:false,
    mobile:false
  })
  const formfields =[
    {
      name:"email",
      type:"email",
      placeholder:"Enter your email",
      style:true,
      value:formData.email,
      onchange : (e) =>{
        setFormdata({...formData,email:e.target.value})
      }
      
    },
    {
      name:"password",
      type:"password",
      style:true,
      placeholder:"Enter your password",
      value:formData.password,
      onchange : (e) =>{
        setFormdata({...formData,password:e.target.value})
      }
      
    }, 
  ]
  const ErrorMessages = {
    email:{
      message:"Email is required",
      isValid:formData.email.length>0,
      onError: ()=>{
        setError((error)=>({...error,email:true}))
      }
    },
    password:{
      message:"Password is required",
      isValid:formData.password.length>0,
      onError: ()=>{
        setError((error)=>({...error,password:true}))
      }
    },
   
   
  }
  const onSubmit =async (event)=>{
    let isError=false;
    event.preventDefault()
    console.log("form submitted");
    console.log(formData)
    console.log(error)
    Object.keys(ErrorMessages).forEach((key)=>{
      if(!ErrorMessages[key].isValid){
        isError=true
        ErrorMessages[key].onError()
      }
    })
    if(!isError){
      const res=await login(formData)
      if(res.status===200){
         alert("Login Successfully")
         navigate('/')
         localStorage.setItem("token",res.data.token)
      }
      else{
        if(res.status===400){
          alert(res.response.data.message)
        }
        alert("Something went wrong")
      }
    }
   }
  
  return (
    <div className={styles.container}>
    <div className={styles.left}>
    <Form  formfields={formfields} onSubmit={onSubmit} error={error} ErrorMessages={ErrorMessages}/>
    </div>
    <div className={styles.right}>
      <p style={{color:'white',textAlign:'center',marginTop:'2rem',fontSize:'1.5rem',fontFamily:'DM Sans'}}>Your Personal Job Finder</p>
    </div>
    

  </div>
  )
}

export default Login