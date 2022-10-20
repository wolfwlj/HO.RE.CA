import React from 'react'
import chefGif from '../../styles/chef-cooking.gif'

const ImgComponent = (props) => {
    console.log(props)
    if (props.imgPosition === "left") {
        return ( <img style={
            {
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "250px",
                height: "250px",
                float: "left",
            }
            } src={chefGif} alt="chef gif" />
        )
    }
    else if (props.imgPosition === "center") {
        return ( <>
        <p></p>
        <img style={
            {
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "250px",
                height: "250px",
                float: "center",
            }
            } src={chefGif} alt="chef gif" />
            </>
        )
    }
    else if (props.imgPosition === "right") {
       
        return ( 
            <>
            <p></p>
            <img style={
            {
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "250px",
                height: "250px",
                float: "right",
            }
            } src={chefGif} alt="chef gif" />
        </>

        )
    }

}

export default ImgComponent