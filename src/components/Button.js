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


// Navigate to top button
export function TopButton() {
    return (
      <a href="#top" className="btn-top">
        back to top
      </a>
    );
  }
Button.defaultProps = {
        route: '#',
        text: 'Click Me'
}
export default Button
