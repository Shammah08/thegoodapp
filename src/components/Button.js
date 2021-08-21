const Button = ({height, width, text, backgroundColor, borderRadius}) => {
    const buttonStyle = {
        height,
        width,
        backgroundColor,
        borderRadius,
    }
    return (
        <button style={ buttonStyle}>
            {text}
        </button>
    )
}



Button.defaultProps = {
    height: '60px',
    width: '250px',
    text: 'Click',
    backgroundColor: '#333',
    borderRadius: '20px',
    // outline: 'none',
    // border: 'none',
    // // fontWeight: '500',
    // fontSize: '30px' 
}
export default Button
