import { Div } from '@base-framework/atoms';
import { Page } from '../templates/page.js';

/**
 * TestPage
 *
 * This will create a test page atom.
 *
 * @returns {object}
 */
export const TestPage = () => (
	Page([
		Div({ class: 'content' }, 'Hello World!')
	])
);