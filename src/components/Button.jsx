import '../styles/style-button.css';

function Button(props){
    var typeButton = (value) => {
        return isNaN(value) && value !== '.' && value !== '=';
    };

    return (
        <div className={typeButton(props.children) ? 'button-calculator button-operator' : 'button-calculator button-number'} onClick={() => {props.handleClick(props.children)}}>{props.children}</div>
    );
}

export default Button;