function Callout(props){
    return (
        <div className={"calloutContainer " + props.color }>
            <div className="calloutText column">{props.children}</div>
            <div className="calloutButton column">
                <button>{props.buttonText === "PDF" ? "Download PDF Here" : "Join Our Facebook Group Here"}</button>
            </div>
        </div>
    );
};

export default Callout;