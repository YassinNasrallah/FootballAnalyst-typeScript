import { useContext } from 'react'
import Context from '../context/Context'
const useFootball = () => {
    const context = useContext(Context)
   if(!context){
     throw new Error('useFootball is null')
   } return context
}

export default useFootball
