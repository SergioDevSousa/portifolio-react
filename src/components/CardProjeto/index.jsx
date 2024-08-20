import styles from './CardProjeto.module.css';


function CardProjeto(){
    return(
        <div className={styles.projetoAtivo}>
            <a
            href="https://github.com/SergioDevSousa/meuportfolio"
            target="_blank"
            >
            <img src="./imagens/projeto alura.png" alt="Projeto Portifólio" />
            <h3>Projeto 1</h3>

            <div className={styles.informacoesProjeto}>
                <p>Projeto feito usando HTML, CSS e JavaScript</p>
                <p>Ver no GitHub Pages</p>
            </div>
            </a>
        </div>
    );
}
export default CardProjeto;
