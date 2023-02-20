import { useState } from "react";
import arrow_icon from "../../assets/vector.png";


function Collapse(props) {
    const [Open, setOpen] = useState(false);
    return (
        <div className="dropdown">
            <div className="dropdown_header">
                {props.title}
                <div>
                    {Open ? (
                        <button onClick={() => setOpen(false)}>
                            <img
                                className="arrow arrow--up"
                                src={arrow_icon}
                                alt="bouton"
                            />
                        </button>
                    ) : (
                        <button onClick={() => setOpen(true)}>
                            <img
                                className="arrow arrow--down"
                                src={arrow_icon}
                                alt="bouton"
                            />
                        </button>
                    )}
                </div>
            </div>
            <div className={Open ? "content" : "content--hidden"}>
                {props.children}
            </div>
        </div>
    );
}

export default Collapse;