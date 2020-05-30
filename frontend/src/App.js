import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
//layouts
import Header from "./components/layouts/Header"
import Main from "./components/layouts/Main"
//bootstrap
import {Container} from "react-bootstrap";


function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

class App extends Component{
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Container>
                    <Header />
                    <ScrollToTop />
                    <Main />
                </Container>
            </Router>
        );
    }
}

export default App;


//
// constructor(props){
//     super(props);
//     this.state = {
//         items: [],
//         isLoaded: false,
//         id: '',
//         year: '',
//         name: '',
//     }
// }
//
//
// // CZEŚĆ DLA ADMINA
// // ---------------------------------------------------------------------
// // ---------------------------------------------------------------------
//
// handleChange = (e) => {
//     this.setState({[e.target.name]: e.target.value});
//     console.log(this.state)
// }
//
// onSubmit = (e) => {
//     e.preventDefault();
//
//     const { id, year, name } = this.state;
//
//     const requestOptions = {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ id, year, name })
//     };
//
//     fetch('http://localhost:4000/cars', requestOptions)
//         .then(response => {
//             this.componentDidMount();
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }
//
//
// // ---------------------------------------------------------------------
// // ---------------------------------------------------------------------
//
// componentDidMount() {
//     fetch('http://localhost:4000/cars')
//         .then(res => res.json())
//
//         .then(json => {
//             this.setState({
//                 isLoaded: true,
//                 items: json,
//             })
//         })
// }
//
// render() {
//     var {isLoaded, items} = this.state;
//
//     if (!isLoaded) {
//         return <div>Loading...</div>
//     } else {
//         return (
//             <div className="App">
//                 <CarsListContainer/>
//
//                 {/*<ul>*/}
//                 {/*    {items.map(item => (*/}
//                 {/*        <li key={item.id}>*/}
//                 {/*            <h1>{item.name}</h1>*/}
//                 {/*            <h1>{item.year}</h1>*/}
//                 {/*        </li>*/}
//                 {/*    ))}*/}
//                 {/*</ul>*/}
//
//                 {/*  <form onSubmit={this.onSubmit}>*/}
//                 {/*      <label>*/}
//                 {/*          Name:*/}
//                 {/*          <input type="text" name="id" onChange={this.handleChange} />*/}
//                 {/*          <input type="text" name="year" onChange={this.handleChange} />*/}
//                 {/*          <input type="text" name="name" onChange={this.handleChange} />*/}
//                 {/*      </label>*/}
//                 {/*      <input onSubmit={this.onSubmit} type="submit" value="Submit" />*/}
//                 {/*  </form>*/}
//             </div>
//         );
//     }
// }