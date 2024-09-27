import { Div } from '@base-framework/atoms';
import { Page } from '../templates/page.js';

/**
 * MainPage
 *
 * This will create a main page atom.
 *
 * @returns {object}
 */
export const MainPage = () => (
    Page([
        Div({ class: 'content' }, 'Main page renderd by Base Framework.')
    ])
);