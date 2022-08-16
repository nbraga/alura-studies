import style from "./Button.module.scss";

type PrivateProps = {
  type?: "button" | "submit" | "reset" | undefined;
  children: string;
  texto?: string; //Se for opcional colocar a interrogação
};

const Botao = ({ texto, children, type }: PrivateProps) => {
  return (
    <>
      <button type={type} className={style.botao}>
        {children}
      </button>
    </>
  );
};

export default Botao;
