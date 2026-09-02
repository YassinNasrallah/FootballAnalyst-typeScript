
import { useState } from "react"
const useSearch = () => {
      const [search, setSearch] = useState<string>('')
      const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(event.target.value)
        console.log(search)
      }
  return {
     search,
     handleChange
  }
}

export default useSearch
