import { Script } from "@base-framework/atoms";

/**
 * Creates a client component.
 *
 * @param {object} props
 * @param {string} props.src
 * @returns {object}
 */
export const useClient = (props) => (
	Script({
		type: "module",
		async: true
	},
	`
import { Import, Builder } from "@base-framework/base";

/**
 * Imports the component and adds it to the scripts parent.
 *
 * @returns {void}
 */
const importLayout = (scriptTag, src) =>
{
	const scriptTag = document.currentScript;
	const parent = scriptTag.parentElement;

	Builder.render(
		Import({
			src: () => import(src})
		}),
		parent
	);
};

const scriptTag = document.currentScript;
importLayout(scriptTag, ${props.src});
	`)
);