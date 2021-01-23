type Props = {
    onClick: () => void;
};

const Button = ({ ...props }: Props) => {
    return <button {...props}>Hello</button>;
};

export default Button;
