function Partners() {
    const partnersList = ['amaize', 'apa insurance', 'safaricom', 'ciroc', 'artcaffe', 'prudential', 'stanbic bank', 'ikigai', 'ohcha noodle bar', 'red bull']
    const partners = partnersList.map(partner => {
        return <a href={'/' + partner}>{partner}</a>
    })
    return (
        <div className='partners'>
            {partners}
        </div>
    )
}

export default Partners
