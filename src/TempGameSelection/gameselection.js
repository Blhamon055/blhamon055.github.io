const GameSelection = ({ text, effectType }) => {
    return (
        <div style={{justifyContent: "center"}}>
            <button style={{ margin: "50px", width: "500px", height: "200px" }} className={`custom-button ${effectType}`}>
                <iframe frameborder="0" src="https://itch.io/embed/2624224" width="500px" height="200px">
                    <a href="https://jkelley14.itch.io/software-practice">
                        REDOX Reactions
                    </a>
                </iframe>
            </button>
        </div >
    )
};

export default GameSelection;