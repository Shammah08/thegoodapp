import Card from './Card'


function ChannelContainer({shows, onClick}) {
    return (
        <section className='channels-section'>
        {shows.map(show => <Card show={show} key={show.id} onClick={onClick}/>)}
        </section>
    )
}

export default ChannelContainer
