import { Link } from "react-router-dom";

const Callout = (props) => {
    return (
        <div className={"calloutContainer " + props.color }>
            <div className={"calloutText column " + ( props.color === "green" || props.color === "blue" ? "white" : "")}>{props.children}</div>
            <div className="calloutButton column">
                {
                props.buttonText === "PDF" ? 
                    <Link to="/pdf">
                        <button>Download PDF Here</button>
                    </Link> :
                    <Link to="/facebook">
                        <button>Join Our Facebook Group Here</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Callout;