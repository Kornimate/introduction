import './Link.css'

function Link(props){
    return <div className="link-style">
        <a href={props.link}>
            <img src={props.image} alt="outer-link" className="link-image"/>
        </a>
    </div>
}

export default Link;