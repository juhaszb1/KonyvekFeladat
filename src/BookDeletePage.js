import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";

export default function BookDeletePage() {
    const param = useParams();
    const navigate = useNavigate();
    const id = param.id;
    const [book, setBook] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://localhost:5001/Konyv/${id}`);
                const book = await res.json();
                setBook(book);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id]);

    return (
        <div className="p-5 m-auto text-center content bg-levander">
            <h1 style={{ textAlign: 'center' }}>Könyv törlése</h1>
            <div className="card">
                <h6 className="text-muted">Könyv neve: {book.nev}</h6>
                <h5>Kiadás éve: {book.kiadasEve}</h5>
                <p>Könyv értékelése: {book.ertekeles}</p>
                <NavLink to={`/`}> <img alt="kep" className="img-fluid" style={{ maxHeight: 200 }} src={book.kepneve} /> </NavLink>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();
                axios({
                    method: 'delete',
                    url: `https://localhost:5001/Konyv/${id}`
                })
                    .then(() => {
                        navigate("/");
                    })
                    .catch(console.log);
            }}>
                <div>
                    <NavLink to={`/`}>
                        <button className="bi bi-backspace btn btn-warning rounded">Mégsem</button>
                    </NavLink>
                    <button className="bi bi-trash btn btn-danger rounded">Törlés</button>
                </div>
            </form>
        </div>
    );
}