// import React from "react";
// class Header extends React.Component {

// }

// export default Header;

export function Header(props){
    return(
        <header className={props.class}>
            <h1>{props.title}</h1>
            <article>
                <a href={props.link_1}>{props.linkTitle_1}</a>
                <span></span>
                <a href={props.link_2}>{props.linkTitle_2}</a>
            </article>
        </header>
    );
}