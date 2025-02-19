import { type ComponentProps, ReactNode } from "react";

// configurando a tipagem dos props
// ComponentProps = extende TODOS os atributos de certa tag
interface ButtonProps extends ComponentProps<"button"> {}

const Button = (props: ButtonProps) => {
	return (
		<button
			className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
			{...props}
		/>
	);
};

export default Button;
