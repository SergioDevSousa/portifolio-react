
import styles from './Project.module.css';

function Project() {
const projetos = [
    {
        id: 1,
        link: 'https://github.com/SergioDevSousa/meuportfolio',
        imagem: './imagens/portifolio alura.png',
        titulo: 'Projeto 1',
        descricao: 'Projeto feito usando HTML, CSS e JavaScript',
        },
        {
        id: 2,
        link: 'https://github.com/SergioDevSousa/JogoSecreto',
        imagem: './imagens/projeto jogo secreto.png',
        titulo: 'Projeto 2',
        descricao: 'Projeto feito usando HTML, CSS e JavaScript',
        },
        {
        id: 3,
        link: 'https://github.com/SergioDevSousa/decodificador',
        imagem: './imagens/img-codificador.png',
        titulo: 'Projeto 3',
        descricao: 'Projeto feito usando HTML, CSS e JavaScript',
        },
        {
        id: 4,
        link: 'https://github.com/SergioDevSousa/ccinetag.git',
        imagem: './imagens/cinetag.png',
        titulo: 'Projeto 4',
        descricao: 'Projeto usando React Routes, deploi no Vercel e json',
        },
        {
        id: 5,
        link: 'https://github.com/SergioDevSousa/challenge-Alura-Geek.git',
        imagem: './imagens/alurageek.png',
        titulo: 'Projeto 5',
        descricao: 'Projeto usando HTML, CSS3, JavaScript, API/json, deploi no Vercel',
        }
    ]

return (
    <section className={styles.projetos} id="projetos">
        <h2 className={styles.titulo}>Meus projetos</h2>
        <div className={styles.containerProjetos}>
            {projetos.map(projetos => (
            <div key={projetos.id} className={styles.projetoAtivo}>
                <a href={projetos.link} target="_blank" rel="noopener noreferrer">
                <img src={projetos.imagem} alt={projetos.titulo} />
                <h3>{projetos.titulo}</h3>
                <div className={styles.informacoesProjeto}>
                    <p>{projetos.descricao}</p>
                </div>
                </a>
            </div>
            ))}
        </div>
    </section>
    );
}

export default Project;