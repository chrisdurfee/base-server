import { Builder } from "@base-framework/base";

/**
 * Imports the component and adds it to the scripts parent.
 *
 * @param {HTMLScriptElement} scriptTag
 * @param {string} src
 * @returns {void}
 */
export const importLayout = (scriptTag, src) =>
{
    if (!scriptTag)
    {
        return;
    }

	const parent = scriptTag.parentElement;

	Builder.render(
		Import({
			src
		}),
		parent
	);
};