function Card({show, onClick}) {
    return (
        <section className='show-card' key={show.id} >
        <figure >
        {/* <h1 style={{zIndex: 10}}>{show.title} </h1> */}
        <img src={show.logo? show.logo : show.cover} alt={`${show.title} cover`} onClick={onClick}/>
        </figure>
            <div className='show-details'>
         <span>   {show.host.map(hostName => <h3 key={hostName}>{hostName} </h3>)}</span>
           <strong>{show.tagline}</strong>
           <i>{show.date}</i>

            </div>
        </section>
    )
}

export default Card;
