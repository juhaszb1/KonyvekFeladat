import React, { useState, useEffect } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";

export default function BookListPage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://localhost:5001/Konyv'
        })
            .then((res) => {
                setBooks(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            <h1 style={{ textAlign: 'center' }}>Könyvek</h1>
            {
                books.map((item) => (
                    <div key={item.id} className="card col-sm-3 d-inline-block m-1 p-2">
                        <h6 className="text-muted">Könyv neve: {item.nev}</h6>
                        <h5>Kiadás éve: {item.kiadasEve}</h5>
                        <p>Könyv értékelése: {item.ertekeles}</p>
                        <NavLink key={item.id + 4} to={`/konyv/${item.id}`}>
                            <img alt="kep" className="img-fluid" style={{ maxHeight: 200 }} src={item.kepneve} />
                        </NavLink>
                        <br />
                        <NavLink key={item.id + 1} to={`/mod-konyv/${item.id}`}>
                            <i className="bi bi-pencil-square mx-1"></i>
                        </NavLink>
                        <NavLink key={item.id + 2} to={`/delete-konyv/${item.id}`}>
                            <i className="bi bi-trash mx-1"></i>
                        </NavLink>
                    </div>
                ))
            }
        </div>
    );
}