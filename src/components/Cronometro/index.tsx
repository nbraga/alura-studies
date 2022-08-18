import React, { useEffect, useState } from "react";
import Botao from "../Button";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/date";
import { ITarefa } from "../../types/tarefas";

interface Props {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void;
}

const Cronometro = ({ selecionado, finalizarTarefa }: Props) => {
  const [tempo, setTempo] = useState<number>();
  const [contar, setContar] = useState(false);

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setContar(true);
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      alert(
        "Tempo de tarefa encerrado, espero que tenha conseguido, até mais!"
      );
      setContar(false);
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>

      <Botao onClick={() => regressiva(tempo)}>Começar</Botao>
    </div>
  );
};

export default Cronometro;
