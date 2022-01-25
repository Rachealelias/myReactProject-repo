import React from 'react'

function Search({search, setSearch}) {

    function handleChange(e){
        setSearch(e.target.value)
       }
    return (
        <div className="ui large fluid icon input">
        <input className="prompt" placeholder='Search here' value={search} onChange={handleChange}/>
        <i className="circular search link icon" />
      </div>

        
    )
}

export default Search