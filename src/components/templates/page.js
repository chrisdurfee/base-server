import { Body, Head, Html, Link, Script } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import MainLayout from '../organisms/website/main.js';

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
            MainLayout([
                ...children
            ])
        ])
    ])
));