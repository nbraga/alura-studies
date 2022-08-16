import { useState } from "react";
import Cronometro from "../components/Cronometro";
import Form from "../components/Form";
import Lista from "../components/Lista";
import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState([
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
    {
      tarefa: "Typescript",
      tempo: "03:00:00",
    },
  ]);
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
