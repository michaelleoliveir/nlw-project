// configurando a tipagem dos props
interface ButtonProps {
    text: string
}

const Button = (props: ButtonProps) => {
    return (
        <button className="bg-violet-500 px-5 py-2 rounded-sm">
            {props.text || "Enviar"}
        </button>
    )
}

export default Button