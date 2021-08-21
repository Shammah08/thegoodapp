const Quote = () => {
    const quote = {
        kelvinClive: {name: 'Bernard Kelvin Clive', quote: 'the investments you make into a brand makes its name worth it'},
        martinLuther: {name: 'Martin Luther', quote: 'i have a dream'}
    }
    return (
        <div className='quote-section'>
            <h2>"{ quote.kelvinClive.quote}"</h2>  
            <h5>{quote.kelvinClive.name}</h5>          
        </div>
    )
}

export default Quote
