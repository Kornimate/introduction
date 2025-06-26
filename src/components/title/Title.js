import { useEffect } from "react"


function Title(props){

    useEffect(() => {
        document.title = `${props.text}`
    },[props.text]);

    return <></>
}

export default Title;