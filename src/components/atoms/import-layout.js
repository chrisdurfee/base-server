import { Builder } from "@base-framework/base";

/**
 * Imports the component and adds it to the scripts parent.
 *
 * @returns {void}
 */
export const importLayout = (scriptTag, src) =>
{
	const parent = scriptTag.parentElement;

	Builder.render(
		Import({
			src
		}),
		parent
	);
};