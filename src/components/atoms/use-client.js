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
const scriptTag = document.currentScript;
importLayout(scriptTag, ${props.src.toString()});
	`)
);