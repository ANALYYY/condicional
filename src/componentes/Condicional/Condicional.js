 import {useState} from "react"
 
 function Condicional () {
    const [email, setEmail] = useState ("");
    const [userEmail, setUserEmail] = useState ("");

    function enviarEmail(event) {
        event.preventDefault ();
        setUserEmail(email);
    }

    function limparEmail() {
        setEmail("");
    }

    return(
        <div>
            <h2>Cadastre o e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail." onChange={(event) => setEmail(event.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar email</button>
                {userEmail && (
                    <div>
                       <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
 }

 export default Condicional;