import { useState } from "react";

const SearchBar = (blogs) => {
    const [searchInput, setSearchInput] = useState('')
    const handleChange = (e) =>{
        e.preventDefault()
        setSearchInput(e.target.value)
    }
    if(searchInput.length > 0){
        console.log(blogs.blogs);
        blogs.blogs.filter((blog) => blog.body.match(searchInput))
        console.log(searchInput);
    }
    return ( 
        <div>
            <input type="search" name="" id="" placeholder="Search..." value={searchInput} onChange={handleChange} />
        </div>
        
     )
}

export default SearchBar