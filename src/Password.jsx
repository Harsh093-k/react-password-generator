import PasswordgeneratorNum from "./PasswordgeneratorNum.jsx";
import './Password.css'

export const  Password =({ password }) => {
    return (
        <div className="ticket">
            {Array.isArray(password) && password.map((num, idx) => (
                <PasswordgeneratorNum num={num} key={idx} />
            ))}

        </div>
    );
}