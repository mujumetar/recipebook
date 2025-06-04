import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';


const Display = () => {

    // http://localhost:3000/recipes



    const [data, setData] = useState([])


    function Fetchapi() {
        fetch(`http://localhost:3000/recipes`)
            .then((res) => res.json())
            .then((res) => setData(res),
                console.log(data))
    }

    async function del(id) {
        const resp = await fetch(`http://localhost:3000/recipes/${id}`, {
            method: "DELETE",
        });
        console.log(resp);
        console.log(`${id} deleted...!!!`);
        location.reload();
    }


    useEffect(() => {
        Fetchapi()
    }, [])
    

    function findel(e) {
        fetch(`http://localhost:3000/recipes?name=${e}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            });
    }


    return (
        <>
            <div className="container my-3">
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        onChange={(e) => findel(e.target.value)}
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
            <div className="container my-3">

                <div className="row g-4">
                    {
                        data.map((ele) => (
                            <div className="col-lg-3 col-md-3 col-sm-2  ">
                                <div className="card" key={ele.id}>
                                    <img src={ele.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{ele.name}</h5>
                                        <p className="card-text">
                                            {
                                                ele.ingredients.map((el) => (
                                                    <li>{el}</li>
                                                ))
                                            }
                                        </p>
                                        <button className="btn btn-danger btn-sm" onClick={() => del(ele.id)}>🗑️</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </>
    )
}

export default Display