import React, {useState} from 'react';
import {MDBCardFooter, MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBContainer, MDBCollapse, MDBCollapseHeader } from "mdbreact";
const CarsTable = (props) => {

    const [collapseID, setCollapseID] = useState("collapse3");

    function toggleCollapse(collapse) {
        setCollapseID(collapseID !== collapse ? collapse : "")
        console.log(collapse)
        console.log(collapseID)
    }

    const data = {
        columns: [
            {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: '150'
            },
            {
                label: 'Year',
                field: 'year'
            }
        ]
    };

    return (
        <MDBCard className="my-5 px-5 pb-5" >
            <MDBCardBody >
                {props.items.map(item => (
                    <div key={item.id}  >
                    <MDBRow >
                        <MDBCol md="3">
                            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img
                                    className="img-fluid shadow  rounded"
                                    src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                                    alt=""
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                        </MDBCol>
                        <hr className="my-5" />
                        <MDBCol style={{padding: 0}} lg="7" xl="8" className="item-body-desc">
                            <MDBCardBody className="px-2">
                                <h3 className="font-weight-bold mb-3 p-0">
                                    <strong>Title of the news</strong>
                                </h3>
                                <p className="dark-grey-text">
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                    nihil impedit quo minus id quod maxime placeat facere possimus,
                                    omnis voluptas assumenda est, omnis dolor repellendus et aut
                                    officiis debitis cum soluta nobis est eligendi placeat facere
                                    aut rerum.
                                </p>
                                <p>{item.name}</p>
                                <p>{item.year}</p>
                                <p></p>
                                <MDBBtn
                                    color="primary"
                                    onClick={() => toggleCollapse("basicCollapse")}
                                    style={{ marginBottom: "1rem" }}
                                >
                                    COLLAPSE BUTTON
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        {/*<hr className="my-5"  />*/}
                        <MDBCol className="collapse-card" style={{padding: 0}} lg="7" xl="8" >
                            <MDBCollapse id="basicCollapse"isOpen={collapseID}>
                                <MDBCardBody className=" more-information-cars "  lg="7" xl="8" >
                                    Pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. 3 wolf moon officia aute, non
                                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                    laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
                                    bird on it squid single-origin coffee nulla assumenda shoreditch
                                    et. Nihil anim keffiyeh helvetica, craft beer labore wes
                                    anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                                    butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                                    raw denim aesthetic synth nesciunt you probably haven&apos;t
                                    heard of them accusamus labore sustainable VHS.
                                </MDBCardBody>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow>
                    <hr className="my-5" />
                </div>
            ))}
        </MDBCardBody>
    </MDBCard>
);

}

export default CarsTable;

// <MDBTable responsive>
//     <MDBTableHead columns={data.columns}/>
//     <MDBTableBody >
//         {
//             props.items.map((item) =>
//                 <tr key={item.id}>
//                     <td>{item.name}</td>
//                     <td>{item.year}</td>
//                 </tr>)
//         }
//     </MDBTableBody>
// </MDBTable>

// import * as React from 'react'
// // import * as ReactBootStrap from 'react-bootstrap'
// // import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// // import * as BootstrapTable from "bootstrap-table/src/bootstrap-table";
//
//
// export default class CarsTable extends React.Component{
//
//
//
// render() {
//     return (
//         <div>
//
//
//
//
//
//
//
//             <table
//                 data-toggle="table"
//                 data-url={this.props.items}>
//                 <thead>
//                 <tr>
//                     <th data-field="id">Item ID</th>
//                     <th data-field="year">Item Name</th>
//                     <th data-field="name">Item Price</th>
//                 </tr>
//                 </thead>
//             </table>
//
//             {/*<ReactBootStrap.Table responsive="lg">*/}
//             {/*    <thead>*/}
//             {/*        <tr>*/}
//             {/*            <th data-sortable="true">Name</th>*/}
//             {/*            <th>Year</th>*/}
//             {/*        </tr>*/}
//             {/*    </thead>*/}
//             {/*    <tbody>*/}
//             {/*        {this.props.items.map(item => (*/}
//             {/*        <tr key={item.id}>*/}
//             {/*            <td>{item.name}</td>*/}
//             {/*            <td>{item.year}</td>*/}
//             {/*        </tr>*/}
//             {/*        ))}*/}
//             {/*    </tbody>*/}
//             {/*</ReactBootStrap.Table>*/}
//         </div>
//     )
// }
// }