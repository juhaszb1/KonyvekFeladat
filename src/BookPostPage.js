import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BookPostPage() {
    const navigate = useNavigate();

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            axios({
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                url: 'https://localhost:5001/Konyv',
                body: JSON.stringify({
                    "nev": document.getElementById("nev").value,
                    "kiadasEve": document.getElementById("kiadasEve").value,
                    "ertekeles": document.getElementById("ertekeles").value,
                    "kepneve": document.getElementById("kepneve").value
                })
            })
                .then(() => {
                    navigate("/")
                })
                .catch(console.log)
        }}>
            <div className="p-5 m-auto content bg-ivory">
                <h1 style={{ textAlign: 'center' }}>Új könyv</h1>
                <br/>
                <h5>Könyv neve:</h5>
                <input type="text" id="nev" className="form-control" />
                <h5>Kiadás éve:</h5>
                <input type="number" id="kiadasEve" className="form-control" />
                <h5>Könyv értékelése:</h5>
                <input type="number" id="ertekeles" className="form-control" />
                <h5>Könyv URL:</h5>
                <input type="text" id="kepneve" className="form-control" />
                <br/>
                <button type="submit" className="btn btn-primary">Küldés</button>
            </div>
        </form>
    )
}