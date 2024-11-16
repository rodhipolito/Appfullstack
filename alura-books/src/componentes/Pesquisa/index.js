import Input from '../Input'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { getLivros } from '../../servicos/livros'
import { postFavorito } from '../../servicos/favoritos'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    width: 80%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;

    p {
        width: 200px;
        text-align: center;
    }

    img {
        width: 100px;
        margin-right: 20px;
    }

    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosDaAPI = await getLivros()
        setLivros(livrosDaAPI)
    }

    async function insereFavorito(id) {
        await postFavorito(id)
        alert(`O livro de id: ${id} foi inserido com sucesso`)
    }

    const imagemPadrao = "http://localhost:3000/static/media/livro.08cebf2371097b2d91cd.png";

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro =>
                        livro.nome.toLowerCase().includes(textoDigitado.toLowerCase())
                    )
                    setLivrosPesquisados(resultadoPesquisa.slice(0, 3))  // Limita a exibição aos 3 primeiros resultados
                }}
            />
            {livrosPesquisados.length > 0 && (
                <div>
                    {livrosPesquisados.map(livro => (
                        <Resultado key={livro.id} onClick={() => insereFavorito(livro.id)}>
                            <img src={imagemPadrao} alt={livro.nome} />
                            <p>{livro.nome}</p>
                        </Resultado>
                    ))}
                </div>
            )}
        </PesquisaContainer>
    )
}

export default Pesquisa
