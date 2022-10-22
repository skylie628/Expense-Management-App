import './Card.css'

const Card = (Pros) =>{
    const classstyle = Pros.className 
    return <div class =  {'Card ' + classstyle}>
        {Pros.children}
    </div>
}

export default Card;