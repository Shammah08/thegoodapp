import blankLaptop from '../images/blank-laptop.jpg'


const Quote = () => {
    const quote = {
        kelvinClive: {name: 'Bernard Kelvin Clive', quote: 'the investments you make into a brand makes its name worth it'},
        martinLuther: {name: 'Martin Luther', quote: 'i have a dream'}
    }
    return (
        <div className='quote-section' id='quote' style={{backgroundImage: `linear-gradient(360deg, rgba(0,0,0,0.5), rgba(0,0,0,0.9)),url(${blankLaptop})`}}>
            <h2>"{ quote.kelvinClive.quote}"</h2>  
            <h5>{quote.kelvinClive.name}</h5>          
        </div>
    )
}

export default Quote
