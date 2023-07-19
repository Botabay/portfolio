import { AboutRemote } from "./AboutRemote/AboutRemote"
import { Contacts } from "./Contacts/Contacts"
import { Introduction } from "./Introduction/Introduction"
import { Projects } from "./Projects/Projects"
import { Skills } from "./Skills/Skills"

export const Content = (): JSX.Element => {
    return (<>
        <Introduction />
        <Skills />
        <Projects />
        <AboutRemote />
        <Contacts />
    </>
    )
}