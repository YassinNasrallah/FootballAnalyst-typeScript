import { useContext } from 'react'
import Context from '../context/Context'
const useHomecontext = () => {
    const context = useContext(Context)
   if(!context){
     throw new Error('useHomecontext is null')
   } return context
}

export default useHomecontext