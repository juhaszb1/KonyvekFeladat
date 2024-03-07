import React, { useState, useEffect } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function BookSinglePage() {
    const param = useParams();
    const id = param.id;
    const [book, setBook] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: `https://localhost:5001/Konyv/${id}`
        })
            .then((res) => {
                setBook(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    return (
      <div className="p-5 m-auto text-center content bg-ivory">
        <h1 style={{ textAlign: 'center' }}>Könyvek</h1>
        <div className="card">
            <h6 className="text-muted">Könyv neve: {book.nev}</h6>
            <h5>Kiadás éve: {book.kiadasEve}</h5>
            <p>Könyv értékelése: {book.ertekeles}</p>
            <NavLink to={`/`}>
                <img alt="kep" className="img-fluid" style={{ maxHeight: 200 }} src={book.kepneve} />
            </NavLink>
        </div>
      </div>  
    );
}