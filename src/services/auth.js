import axios from 'axios'
export const register = async(data)=>{
  try {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/recruity/user/signup`,data,{
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    return res;
  } catch (error) {
    return error
    
  }
}

export const login = async(data)=>{
  try {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/recruity/user/login`,data,{
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    return res;
  } catch (error) {
    return error
    
  }
}