const Button = ({classes, text, route, onClick}) => {
    let url = '/' + route
    url = url.toLowerCase()
   

    return (
        <button className={classes} onClick={onClick}>
        <a href={url}>
        {text}
        </a>
        </button>
    )
}



Button.defaultProps = {
        route: '#',
        text: 'Click Me'
}
export default Button
