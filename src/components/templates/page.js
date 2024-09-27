import { Body, Head, Html, Link, Main, Script } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { HeaderNav } from '../organisms/organisms.js';

/**
 * Page
 *
 * This will create a page template.
 *
 * @returns {object}
 */
export const Page = Atom((props, children) => (
    Html([
        Head([
            Script(),
            Link({ rel: 'stylesheet', href: '/css/main.css' })
        ]),
        Body({ class: `main-page ${props.class}` }, [
            Main([
                HeaderNav(),
                ...children
            ])
        ])
    ])
));