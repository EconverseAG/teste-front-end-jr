import React, { useState } from 'react';

const Newsletter: React.FC = () => {
    
    const [email, setEmail] = useState('');

    const sendEmail = (email: string) => {
        // Função para enviar o email da newsletter
        alert(`Email enviado é o: ${email}`)
    }

    return (
        <div className='newsletter'>
            <p>
                Cadastre-se e Receba nossas <br />
                <span className='bold'>novidades e promoções</span> <br />
                <span className='light'>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</span>
            </p>
            <div className='input-newsletter'>
                <input type='email' onChange={e => setEmail(e.target.value)} placeholder='SEU E-MAIL' />
                <button onClick={() => sendEmail(email)}>OK</button>
            </div>
        </div>
    )
}

export default Newsletter;
