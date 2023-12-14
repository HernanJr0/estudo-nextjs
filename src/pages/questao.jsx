import { useEffect, useState } from "react"

export default function questao() {

    const [questao, setQuestao] = useState()

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/001')
            .then(resp => resp.json())
            .then(setQuestao)
    }, [])

    function renderResp() {
        if(questao){
            return questao.resposta.map((resp, i) => {
                return <li key={i}>{resp}</li>
            })
        } return false
    }

    return (
        <div>
            <h1>Questão</h1>
            <div>
                <h2>{questao?.id}. {questao?.enunciado}</h2>
                <ul>
                    {renderResp()}
                </ul>
            </div>
        </div>
    )
}