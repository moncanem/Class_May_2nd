import { TopBar } from "../components/TopBar";
import { Header } from "../components/Header";

const picsList = [
    {
        "src": "../img/testimonial-1.jpg",
        "alt": "pic-01",
        "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque libero maxime id eos assumenda! Magni."
    },
    {
        "src": "../img/testimonial-2.jpg",
        "alt": "pic-02",
        "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque libero maxime id eos assumenda! Magni."
    },
    {
        "src": "../img/testimonial-3.jpg",
        "alt": "pic-03",
        "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque libero maxime id eos assumenda! Magni."
    },
    {
        "src": "../img/testimonial-4.jpg",
        "alt": "pic-04",
        "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque libero maxime id eos assumenda! Magni."
    }
];

function AboutGallery(props) {
    return (
        <figure key={props.alt}>
            <img src={props.src} alt={props.alt}/>
            <figcaption>
                <p>{props.content}</p>
            </figcaption>
        </figure>
    )
}

function RecentPost(){
    return(
        <section>
            <h2>Recent Post</h2>
            {
                picsList.map(
                    (picture) => (
                        <AboutGallery
                            src={picture.src}
                            alt={picture.alt}
                            content={picture.content}
                        />
                    )
                )
            }
        </section>
    );
}

export function About(){
    return(
        <div className="aboutPage">
            <TopBar />
            <Header
                title={"About"}
                class={"header-home"}
                link_1={"#"}
                link_2={"#"}
                linkTitle_1={"About"}
                linkTitle_2={"Services"}
            />
            <RecentPost/>
        </div>
    )
}