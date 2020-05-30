import React, { useState, useEffect } from 'react'
import axios from 'axios'



const SearchCarPage = () => {
    const [carSearch, setCarSearch] = useState(
        { marka: '', model: '', cena: '', rok: ''}
    );

    const handleChange = (event) => {
        setCarSearch({...carSearch, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("carSearch" + carSearch)
        axios.get('http://localhost:4000/cars/search', carSearch)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div>
            <form className='white' onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="marka">Marka</label>
                    <input type="text" name="marka" value={carSearch.marka} onChange={handleChange} required />
                </div>
                <div className="input-field">
                    <label htmlFor="model">Model</label>
                    <input type="text" name="model" value={carSearch.model} onChange={handleChange} required />
                </div>
                <div className="input-field">
                    <label htmlFor="cena">Cena</label>
                    <input type="text" name="cena" value={carSearch.cena} onChange={handleChange} required />
                </div>
                <div className="input-field">
                    <label htmlFor="rok">rok</label>
                    <input type="text" name="rok" value={carSearch.rok} onChange={handleChange} required />
                </div>
                <div className="input-field">
                    <button className="btn blue darken-3" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SearchCarPage;