
import { Digitacao } from '../Digitacao';
import Perfil from '../Perfil';
import styles from './Information.module.css';

function Information(){
    return(
            <div className={styles.home}>
                <div className={styles.informacoes}>
                    <Digitacao text = "Olá! Sou Sérgio Sousa." />
                    <p>Estou cursando Análise e Desenvolvimento de Sistemas, atualmente finalizei a formação Front-End 2024 T6 ONE junto a ALURA e atualmente estudando na DIO. Este portifólio servirá para apresentar meus projetos desenvolvidos ao logo de meu aprendizado, assim como atualizar meus trabalhos. Espero contribuir e compartilhar com outros desenvolvedores e faço um convite para me seguir em minhas redes sociais.</p>
                </div>
                <Perfil />
            </div>
    )
}
export default Information;