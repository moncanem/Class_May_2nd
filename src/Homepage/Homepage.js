import { TopBar } from "../components/TopBar";
import { Header } from "../components/Header";

function AboutGallery(props) {
    return (
        <figure>
            <img src={props.src}/>
            <figcaption>

            </figcaption>
        </figure>
    )
}

export function Homepage() {
    return (
        <div className="header-home">
            <TopBar />
            <Header
                title={"Home"}
                class={"header-home"}
                link_1={"#"}
                link_2={"#"}
                linkTitle_1={"About"}
                linkTitle_2={"Services"}
            />
        </div>
    )
}