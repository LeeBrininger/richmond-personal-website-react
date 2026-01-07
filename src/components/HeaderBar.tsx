import {metadata} from "../data/metadata.tsx";


export default function HeaderBar() {
    return(
        <header className="headerBar">
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description}/>
            <meta name="author" content={metadata.author}/>
            <meta name="charset" charSet={metadata.charset}/>
            <h1>Richmond Brininger</h1>
            <h2>Senior Fullstack Developer</h2>
        </header>
    );
}