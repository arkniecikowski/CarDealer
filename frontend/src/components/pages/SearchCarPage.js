import React, {useEffect, useState} from 'react'
import Form from "react-bootstrap/Form";

const SearchCarPage = props => {
    const [carSearch, setCarSearch] = useState({ marka: '', model: 'All', cena: '', rok: ''});
    const [marka, setMarka] = useState([]);
    const [model, setModel] = useState([]);
    const [basicData, setBasicData] = useState([])
    

    //Function to remove repetitions
    const distinct = (value, index, self) => {
        return self.indexOf(value) === index;
    }

    useEffect(() => {
        const marki = [];
        setBasicData(props.data)
        props.data.map(item => {
            marki.push(item.marka)
        });
        setMarka(marki.filter(distinct))
    }, [])

    const handleChange = (event) => {
        setCarSearch({...carSearch, [event.target.name]: event.target.value})

            if(event.target.name === "marka") {
                setModel([]);
                setCarSearch({ marka: event.target.value, model: 'All', cena: '', rok: ''})
                if(event.target.value !== "All"){
                    let m = [];
                    basicData.map(item => {
                        if(item.marka === event.target.value) {
                            m.push(item.model)
                        } 
                    })
                    setModel(m.filter(distinct))
                } else {
                    let m = [];
                    basicData.map(item => {
                        if(item.marka === event.target.value) {
                            m.push(item.model)
                        } 
                    })
                    setModel(m.filter(distinct))
                }
            }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onChange(carSearch);
    }

    return (
        <div>
            <form className='white' onSubmit={handleSubmit}>
                <div className="input-field">
                        <Form.Group controlId="exampleForm.SelectCustom">

                            {/*MARKA*/}
                            <Form.Label>Marka</Form.Label>
                            <Form.Control as="select" name="marka" value={carSearch.marka} onChange={handleChange}>
                                <option name="marka" value="All">All</option>
                                {marka.map((item, index) => (
                                    <option name="marka" key={index} value={item}>{item}</option>
                                ))}
                            </Form.Control>

                            {/*MODEL*/}
                            <Form.Label>Model</Form.Label>
                            <Form.Control as="select" name="model" value={carSearch.model} onChange={handleChange}>
                                <option name="model" value="All">All</option>
                                {model.map((item, index) => (
                                    <option name="model" key={index} value={item}>{item}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                    {/*<select name="marka" value={carSearch.marka} onChange={handleChange}>*/}
                    {/*    <option value="A">Apple</option>*/}
                    {/*    <option value="B">Banana</option>*/}
                    {/*    <option value="C">Cranberry</option>*/}
                    {/*</select>*/}


                </div>
                {/*<div className="input-field">*/}
                {/*    <label htmlFor="model">Model</label>*/}
                {/*    <input type="text" name="model" value={carSearch.model} onChange={handleChange} required />*/}
                {/*</div>*/}
                {/*<div className="input-field">*/}
                {/*    <label htmlFor="cena">Cena</label>*/}
                {/*    <input type="text" name="cena" value={carSearch.cena} onChange={handleChange} required />*/}
                {/*</div>*/}
                {/*<div className="input-field">*/}
                {/*    <label htmlFor="rok">rok</label>*/}
                {/*    <input type="text" name="rok" value={carSearch.rok} onChange={handleChange} required />*/}
                {/*</div>*/}
                <div className="input-field">
                    <button className="btn blue darken-3" onSubmit={handleSubmit} type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SearchCarPage;