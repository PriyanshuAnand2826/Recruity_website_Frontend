import React, { useState } from 'react'
import Form from '../components/Form'
import { register } from '../services/auth'
import { useNavigate } from 'react-router-dom'
import styles from './Register.module.css'
import right_image from '../assets/right_image.png'

function Register() {
  const navigate=useNavigate()
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
      name:"name",
      type:"text",
      style:true,
      placeholder:"Enter your name",
      value:formData.name,
      onchange : (e) =>{
        setFormdata({...formData,name:e.target.value})
      }

    },
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
    {
      name:"confirm password",
      type:"password",
      style:true,
      placeholder:"Confirm your password",
      value:formData.confirmPassword,
      onchange : (e) =>{
        setFormdata({...formData,confirmPassword:e.target.value})
      }
      
    },
    {
      name:"mobile",
      type:"text",
      style:true,
      placeholder:"Enter your mobile number",
      value:formData.mobile,
      onchange : (e) =>{
        setFormdata({...formData,mobile:e.target.value})
      }
      
    },
    {
      name:"checkbox",
      type:"checkbox",
      value:formData.checkbox,
      label:"You must agree terms & conditions",
      onchange: (e) => {
        console.log(e.target.checked)
        setFormdata({ ...formData, checkbox: e.target.checked})
    }
    }
  ]
  const ErrorMessages = {
    name:{
      message:"Name is required",
      isValid:formData?.name?.length>0,
      onError: ()=>{
        setError((error)=>({...error,name:true}))
      }
    },
    email:{
      message:"Email is required",
      isValid:formData?.email?.length>0,
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
    confirmPassword:{
      message:"password is required",
      isValid:formData.confirmPassword.length>0,
      onError: ()=>{
        setError((error)=>({...error,confirmPassword:true}))
      }
    },
    mobile:{
      message:"mobile number is required",
      isValid:formData.mobile.length>0,
      onError: ()=>{
        setError((error)=>({...error,mobile:true}))
      }
    },
    checkbox:{
      message:"You must agree terms & conditions",
      isValid:formData.checkbox,
      onError: ()=>{
        setError((error)=>({...error,checkbox:true}))
      }
    }
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
      const res=await register(formData)
      if(res.status===200){
         alert("User Create")
         navigate('/login')

      }
      else{
        alert("Something went wrong")
      }
    }
   }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
      <Form newUser={true} formfields={formfields} onSubmit={onSubmit} error={error} ErrorMessages={ErrorMessages}/>
      </div>
      <div className={styles.right}>
        <p style={{color:'white',textAlign:'center',marginTop:'2rem',fontSize:'1.5rem',fontFamily:'DM Sans'}}>Your Personal Job Finder</p>
      </div>
      

    </div>
  )
}

export default Register