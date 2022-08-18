import React, { useState } from "react";
import { ITarefa } from "../../types/tarefas";
import Botao from "../Button";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

// const Formulario = ({ setTarefas }: { setTarefas: any }) => {
const Formulario = ({
  setTarefas,
}: {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}) => {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  const adicionarTarefa = (e: React.FormEvent) => {
    e.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        ...{ tarefa, tempo },
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    setTarefa("");
    setTempo("00:00");
  };
  return (
    <div>
      <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            value={tempo}
            onChange={(e) => setTempo(e.target.value)}
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao type="submit">Adicionar</Botao>
      </form>
    </div>
  );
};

export default Formulario;
