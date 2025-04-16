import "../../index.css"
import './backgroundPink.css'
import BackgroundPink from "../../assets/img/background_pink.png"

const PinkBackground = () => {
    return (
        <>
        <div className="pink-background">
            <img src={BackgroundPink} alt="pink background" />
        </div>
        </>
    )
}

export default PinkBackground