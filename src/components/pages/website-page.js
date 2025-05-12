import { Index } from "./index.js";
import { MainLayout } from "./main-layout.js";

/**
 * WebsitePage
 *
 * Renders the full HTML document around your MainLayout children.
 *
 * @param {object[]} children
 * @returns {object}
 */
export const WebsitePage = (children) =>
    Index([
        MainLayout(children)
    ]);

export default WebsitePage;