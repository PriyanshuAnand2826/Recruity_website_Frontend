import React from 'react'
import styles from './Form.module.css'
import { useNavigate } from 'react-router-dom'



function FormFields ({name,type,placeholder,value,onChange,label,styles1}){
   return (
    <>
    <input className={styles1 ? `${styles.fields_register}`:""} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
    {label ? <label style={{fontSize:'1rem',marginLeft:'7px'}} id={name} htmlFor={name}>{label}</label> : null}
    </>
   )
}




function Form({formfields,onSubmit,error,ErrorMessages,newUser}) {
  const navigate = useNavigate()
  return (
    <form className={styles.form} onSubmit={onSubmit}> 
     <p style={{fontSize:'2rem'}}>{newUser? "Create An Account":"Login To Account"} </p>
     <p style={{fontSize:'1rem'}}>Your personal job finder is here</p>
      {formfields.map((field,index)=>{
        return(
          <>
          <FormFields key={index} styles1={field.style} name={field.name} type ={field.type} label={field?.label} placeholder={field?.placeholder} value={field.value} onChange={field.onchange} />
          {error[field.name] ? <p style={{color:'red',fontSize:'0.8rem',marginLeft:'5px',marginTop:'3px'}}>{ErrorMessages[field.name].message}</p> : null }
          </>
        )
      })}
      <button className={styles.btn} type='submit'>{newUser ? "Create Account":"Login Account"}</button>
      <span className={styles.bottom_text} style={{fontSize:'1.2rem'}}>{newUser ? "Already have an account" : "New User" } <u style={{color:'blueviolet',cursor:'pointer'}} onClick={()=>{newUser ? navigate('/login'):navigate('register')}}>{newUser ? "Log In":"Sign Up"}</u></span>
    </form>

  )
}

export default Form