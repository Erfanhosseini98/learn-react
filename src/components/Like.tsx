import { useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

interface Props {
    onClick: () => void;
}

const Like = ({ onClick }: Props) => {
    const [like, setLike] = useState(false);

    const toggle = () => {
        setLike(!like);
        onClick();
    }
    if(like){
    return <AiFillLike color="#45a5e6" size={40} onClick={toggle}></AiFillLike> }
    return <AiFillDislike color="gray" size={40} onClick={toggle}></AiFillDislike>
};

export default Like;
