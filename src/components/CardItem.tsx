interface Prop {
    name: String,
    description: String
}
const CardItem = ({ name, description }: Prop) => {
    return (
        <div className="e-card playing">
            <div className="image"></div>

            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>


            <div className="infotop">
                <span>
                    {name}
                </span>
                <div className="name p-4">{description}</div>
            </div>
        </div>
    )
}

export default CardItem