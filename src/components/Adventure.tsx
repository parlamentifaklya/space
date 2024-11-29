type AdventureType = {
    img: string,
    title: string,
    description: string
}

const Adventure = (props: AdventureType) => {
  return (
    <div>
        <img src={props.img} alt={props.title} />
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default Adventure