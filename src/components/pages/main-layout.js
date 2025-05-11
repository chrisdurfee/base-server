import { Div } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { Header } from './header/header.js';

/**
 * This will create the main layout for the website.
 *
 * @param {object} props
 * @param {object} children
 * @returns {object}
 */
export const MainLayout = Atom((props, children) => (
    Div({ class: 'flex flex-auto flex-col relative' }, [
        new CookieConsentBar(),
        Header(),
        Div({ ...props, class: 'flex flex-auto flex-col' }, children)
    ])
));

export default MainLayout;