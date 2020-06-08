import React, {useState, useEffect } from "react";
import axios from 'axios';
//styles
import "../../styles/pages/CarListPage.scss"
//pages
import SearchCarPage from "./SearchCarPage";

const CarListPage = () => {
    const [basicData, setbasicData] = useState([]);
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    const [value, setValue] = useState("");

    useEffect(() => {
        axios.get('http://localhost:4000/cars')
            .then(res => {
                setData(res.data);
                setbasicData(res.data);
                setLoad(true);
            })
            .catch(err => {
                setError(err.message);
                setLoad(true)
            })
    }, []);

    function handleChange(newValue) {
        const newData = basicData;
        if (newValue.marka === "All") {
            setData(newData)
        } else {
            setData(
                basicData.filter(val =>
                    val.marka.toUpperCase() === newValue.marka.toUpperCase()
                    // val.model.toUpperCase() === newValue.model.toUpperCase()
                )
            )
        }

        // const newData2 = basicData.filter(val =>
        //     val.marka.toUpperCase() === newValue.marka.toUpperCase()
        //     // val.model.toUpperCase() === newValue.model.toUpperCase() &&
        //     // val.cena < newValue.cena &&
        //     // val.rok < newValue.rok
        // )
        // console.log(data)
        // console.log(basicData)
        // setData(newData)
    }

    if (load) {
        return (
            <section className="cars-list">
                <SearchCarPage onChange={handleChange} data={data}/>
                <div className="row">
                    {data.map((data, index) => (
                        <div className="col-sm-6 col-md-4 py-3" key={index}>
                            <div className="card">
                                <img className="card-img-top img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/2019_Kia_Sportage_2_CRDi_ISG_S-A_1.6_Front.jpg/1920px-2019_Kia_Sportage_2_CRDi_ISG_S-A_1.6_Front.jpg" alt="Card image cap"/>
                                <div className="card-block p-3">
                                    <a>{data.marka + " " + data.model} </a>
                                    <p><small>xxxxxxxxxxxxxxxxxxx</small></p>
                                    <div className="vehicle-thumb__params">
                                        <span>{data.rok}</span>
                                        <span>|</span>
                                        <span>{data.przebieg} km</span>
                                    </div>
                                    <h4>{data.cena} zł</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    } else {
        return (
            <section>
                Loading...
            </section>
        )
    }

}


export default CarListPage;

// const carFakeData = [
//     { marka: "KIA", model: "Sportage", description: "2.0 CRDI 184km", rok: "2012", przebieg: "212997", cena: "42000" },
//     { marka: "KIA", model: "Sportage", description: "2.0 CRDI 184km", rok: "2012", przebieg: "212997", cena: "42000" },
//     { marka: "KIA", model: "Sportage", description: "2.0 CRDI 184km", rok: "2012", przebieg: "212997", cena: "42000" },
//     { marka: "KIA", model: "Sportage", description: "2.0 CRDI 184km", rok: "2012", przebieg: "212997", cena: "42000" },
//     { marka: "KIA", model: "Sportage", description: "2.0 CRDI 184km", rok: "2012", przebieg: "212997", cena: "42000" },
//     { marka: "KIA", model: "Sportage", description: "2.0 CRDI 184km", rok: "2012", przebieg: "212997", cena: "42000" },
//     { marka: "KIA", model: "Sportage", description: "2.0 CRDI 184km", rok: "2012", przebieg: "212997", cena: "42000" },
//     { marka: "KIA", model: "Sportage", description: "2.0 CRDI 184km", rok: "2012", przebieg: "212997", cena: "42000" },
//     { marka: "KIA", model: "Sportage", description: "2.0 CRDI 184km", rok: "2012", przebieg: "212997", cena: "42000" },
//     { marka: "KIA", model: "Sportage", description: "2.0 CRDI 184km", rok: "2012", przebieg: "212997", cena: "42000" },
//     { marka: "KIA", model: "Sportage", description: "2.0 CRDI 184km", rok: "2012", przebieg: "212997", cena: "42000" },
//     { marka: "KIA", model: "Sportage", description: "2.0 CRDI 184km", rok: "2012", przebieg: "212997", cena: "42000" },
// ]
