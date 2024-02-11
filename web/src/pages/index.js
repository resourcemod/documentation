import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import {Highlight, themes} from "prism-react-renderer"

const codeBlock = `
const {Color, events, chat} = require('resourcemod')

events.onPlayerSpawn((event) => {
    event.getPlayer().setModel('models/your/custom/player/model.vmdl');
    event.getPlayer().setColor(new Color(255, 255, 255, 0.5));
})

events.onPlayerBlind((event) => {
    if (event.getPlayer().getSlot() === event.getAttacker().getSlot()) {
        event.getPlayer().hint(\`you blinded yourself.\`)
        chat.sayToEveryone(event.getPlayer().getName() + " just blinded himself..");
    }
})

events.onPlayerChat((event) => {
    if (event.getMessage().startsWith('!help')) {
        event.getPlayer().say('Please, read resourcemod docs: https://rmod.dev/docs/');
    }
})
`

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header style={{marginTop: "auto", marginBottom: "auto"}}>
            <div className="container" style={{display: "flex", gap: "25px", alignItems: "center", marginTop: "auto"}}>
                <div style={{textAlign: "left", minWidth: "550px"}}>
                    <Heading as="h1" className="hero__title">
                        {siteConfig.title}
                    </Heading>
                    <p className="hero__subtitle">Create unique game modes in Counter-Strike 2
                        using a full-fledged NodeJS runtime.</p>
                    <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
                        <Link
                            className="button button--secondary button--lg link-button"
                            to="/docs/getting-started">
                            Getting Started
                        </Link>
                        <Link
                            className="button button--secondary button--lg link-button"
                            to="https://github.com/resourcemod/resourcemod">
                            GitHub
                        </Link>
                    </div>
                </div>
                <div style={{textAlign: "left", marginTop: "25px"}}>
                    <Highlight

                        code={codeBlock}
                        language="tsx"
                    >
                        {({className, style, tokens, getLineProps, getTokenProps}) => (
                            <pre style={style}>
            {tokens.map((line, i) => (
                <div key={i} {...getLineProps({line})}>

                    {line.map((token, key) => (
                        <span key={key} {...getTokenProps({token})} />
                    ))}
                </div>
            ))}
            </pre>
                        )}
                    </Highlight>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`ResourceMod documentation`}
            description="">
            <HomepageHeader/>
        </Layout>
    );
}
