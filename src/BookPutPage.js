import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function BookPutPage() {
    const param = useParams();
    const navigate = useNavigate();
    const id = param.id;
    const [, setBook] = useState([]);
    const [bookNev, setBookNev] = useState("");
    const [bookKiadasEve, setBookKiadasEve] = useState("");
    const [bookErtekeles, setBookErtekeles] = useState("");
    const [bookKepneve, setBookKepneve] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://localhost:5001/Konyv');
                const book = await res.json();
                setBook(book);
                setBookNev(book.nev)
                setBookKiadasEve(book.kiadasEve)
                setBookErtekeles(book.ertekeles)
                setBookKepneve(book.kepneve)
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, [id, bookNev, bookKiadasEve, bookErtekeles, bookKepneve]);

    const handleBookNevChange = (e) => {
        setBookNev(e.target.value);
    }

    const handleBookKiadasEveChange = (e) => {
        setBookKiadasEve(e.target.value);
    }

    const handleBookErtekelesChange = (e) => {
        setBookErtekeles(e.target.value);
    }

    const handleBookKepneveChange = (e) => {
        setBookKepneve(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "put",
            url: `https://localhost:5001/Konyv/${id}`,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                nev: document.getElementById("nev").value,
                kiadasEve: document.getElementById("kiadasEve").value,
                ertekeles: document.getElementById("ertekeles").value,
                kepneve: document.getElementById("kepneve").value
            }
        })
            .then(() => {
                navigate("/");
            })
            .catch(console.log);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="p-5 m-auto content bg-ivory">
                <h1 style={{ textAlign: 'center' }}>Könyv módosítás</h1>
                <br/>
                <h5>Könyv neve:</h5>
                <input type="text" id="nev" className="form-control" defaultValue={bookNev} onChange={handleBookNevChange} />
                <h5>Kiadás éve:</h5>
                <input type="number" id="kiadasEve" className="form-control" defaultValue={bookKiadasEve} onChange={handleBookKiadasEveChange} />
                <h5>Könyv értékelése:</h5>
                <input type="number" id="ertekeles" className="form-control" defaultValue={bookErtekeles} onChange={handleBookErtekelesChange} />
                <h5>Könyv URL:</h5>
                <input type="text" id="kepneve" className="form-control" defaultValue={bookKepneve} onChange={handleBookKepneveChange} />
                <br/>
                <button type="submit" className="btn btn-primary">Küldés</button>
            </div>
        </form>
    )
}