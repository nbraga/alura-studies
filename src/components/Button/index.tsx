import style from "./Button.module.scss";

type PrivateProps = {
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  onClick?: () => void;
};

const Botao = ({ children, type, onClick }: PrivateProps) => {
  return (
    <>
      <button onClick={onClick} type={type} className={style.botao}>
        {children}
      </button>
    </>
  );
};

export default Botao;
