import style from "./Lista.module.scss";
import Item from "./Item";

interface ITarefa {
  tarefa: string;
  tempo: string;
}

const Lista = ({ tarefas }: { tarefas: ITarefa[] }) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos em dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default Lista;
