import './HeaderButtons.css'

function HeaderButtons({name, handleClick, index}) {
    return (
        <button 
            onClick={() => {
                handleClick(name)
            }}
            id={index === name ? "Focussed": name}
            class="tablinks"
        >{name}</button>
    )
}


export default HeaderButtons;