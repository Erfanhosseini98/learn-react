import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    color: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    onClick?: () => void;
}
const Button = ({ children, color, onClick }: Props) => {
    return (
        <div className={"btn btn-" + color} onClick={onClick}>
            {children}
        </div>
    );
};

export default Button;
