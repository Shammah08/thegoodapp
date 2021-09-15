import Card from './Card'


function ChannelContainer({shows}) {
    return (
        <section className='channels-section'>
        {shows.map(show => <Card show={show} key={show.id} />) }
        </section>
    )
}

export default ChannelContainer
