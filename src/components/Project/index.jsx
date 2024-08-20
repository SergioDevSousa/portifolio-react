import CardProjeto from '../CardProjeto';
import styles from './Project.module.css'

function Project() {
    return (
    <section className={styles.projetos} id="projetos">
        <h2 className={styles.titulo}>Meus projetos</h2>

        <div className={styles.containerProjetos}>
        <CardProjeto />
        <div className={styles.projetoAtivo}>
            <a
            href="https://github.com/SergioDevSousa/JogoSecreto"
            target="_blank"
            >
            <img
                src="./imagens/projeto jogo secreto.png"
                alt="Projeto Portifólio"
            />
            <h3>Projeto 2</h3>

            <div className={styles.informacoesProjeto}>
                <p>Projeto feito usando HTML, CSS e JavaScript</p>
                <p>Ver no GitHub Pages</p>
            </div>
            </a>
        </div>

        <div className={styles.projetoAtivo}>
            <a
            href="https://github.com/SergioDevSousa/decodificador"
            target="_blank"
            >
            <img
                src="./imagens/img-codificador.png"
                alt="Projeto Portifólio"
            />
            <h3>Projeto 3</h3>

            <div className={styles.informacoesProjeto}>
                <p>Projeto feito usando HTML, CSS e JavaScript</p>
                <p>Ver no GitHub Pages</p>
            </div>
            </a>
        </div>

        <div className={styles.projetoAtivo}>
            <a
            href="https://github.com/SergioDevSousa/ccinetag.git"
            target="_blank"
            >
            <img src="./imagens/cinetag.png" alt="Cinetag" />
            <h3>Projeto 4</h3>

            <div className={styles.informacoesProjeto}>
                <p>Projeto usando React Routes, deploi no Vercel e json</p>
                <p>Ver no GitHub Pages</p>
            </div>
            </a>
        </div>

        <div className={styles.projetoAtivo}>
            <a
            href="https://github.com/SergioDevSousa/challenge-Alura-Geek.git"
            target="_blank"
            >
            <img src="./imagens/alurageek.png" alt="Cinetag" />
            <h3>Projeto 5</h3>

            <div className={styles.informacoesProjeto}>
                <p>
                Projeto usando HTML, CSS3, JavaScript, API/json, deploi no
                Vercel
                </p>
                <p>Ver no GitHub Pages</p>
            </div>
            </a>
        </div>

        <div className="projeto">
            <a href="#" target="_blank">
            <img
                src="./imagens/515x272.png"
                alt="Projeto landing page Mario"
            />
            <h3>Projeto 6</h3>
            <div className="informacoes-projeto">
                <p>Projeto feito usando HTML, CSS e JavaScript</p>
                <p>Ver no GitHub Pages</p>
                </div>
            </a>
            </div>
        </div>
        <div className={styles.button}>
            <button>Mostrar mais</button>
        </div>
        </section>
    );
}
export default Project;
