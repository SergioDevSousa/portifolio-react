
import { Digitacao } from '../Digitacao';
import Perfil from '../Perfil';
import styles from './Information.module.css';

function Information(){
    return(
            <section className={styles.home}>
                <div className={styles.informacoes}>
                    <Digitacao text = "Olá! Sou Sérgio Sousa." />
                    <p>Estou cursando o 2º semestre de Análise e Desenvolvimento de Sistemas, atualmente finalizei a formação Front-End 2024 T6 ONE junto a ALURA e este portifólio servirá para apresentar meus projetos desenvolvidos ao logo de meu aprendizado, assim como atualizar meus trabalhos. Espero contribuir e compartilhar com outros desenvolvedores e listo aqui minhas redes sociais para me acompanhar ou falar comigo.</p>
                        
                </div>
                    <Perfil />
            </section>
    )
}
export default Information;