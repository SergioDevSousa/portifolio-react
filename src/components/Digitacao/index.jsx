import {useEffect, useState} from "react";
import styles from "./Digitacao.module.css";


export function Digitacao(props){
    const[text, setText] = useState("");

    const escreverNaTela = (text, i = 0) =>{
        if (i < text.length) {
            setText(text.slice(0, i + 1));
            setTimeout(() => escreverNaTela(text, i + 1), 100);
        }
    };

    useEffect(() => {
        setTimeout(() => escreverNaTela (props.text));
    }, []);

    return(
        <div className={styles.texto}>
        {text}
        </div>
    )
}