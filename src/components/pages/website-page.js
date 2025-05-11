import { Body, Head, Html, Link, Meta, Title } from "@base-framework/atoms";
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
    Html(
        {
            lang: "en",
            class: "m-0 p-0 max-w-full overscroll-none overflow-y-auto overflow-x-hidden"
        },
        [
            Head([
                Meta({ charset: "utf-8" }),
                Title({}, "Base Example"),

                // meta description/keywords
                Meta({ name: "description", content: "" }),
                Meta({ name: "keywords", content: "" }),

                // styles
                Link({ rel: "preload", href: "/css/styles.css", as: "style" }),
                Link({
                    rel: "stylesheet",
                    type: "text/css",
                    href: "/css/styles.css"
                }),

                // icons
                Link({ rel: "shortcut icon", href: "./favicon.ico" }),
                Link({
                    rel: "icon",
                    href: "./favicon.ico",
                    type: "image/x-icon"
                }),

                // PWA manifest & theming
                Link({ rel: "manifest", href: "./manifest.json" }),
                Meta({ name: "theme-color", content: "#09090b" }),
                Meta({
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover, user-scalable=no"
                }),
                Meta({ name: "mobile-web-app-capable", content: "yes" }),

                // iOS PWA
                Meta({
                    name: "apple-mobile-web-app-status-bar-style",
                    content: "black-translucent"
                }),
                Meta({ name: "apple-mobile-web-app-title", content: "Base Example" }),
                Link({
                    rel: "apple-touch-icon",
                    href: "./images/icons/icon-512.png"
                }),
                Link({
                    rel: "icon",
                    sizes: "192x192",
                    href: "./images/icons/icon-192.png"
                }),

                // Windows tile
                Meta({
                    name: "msapplication-TileImage",
                    content: "./images/icons/icon-192.png"
                }),
                Meta({ name: "msapplication-TileColor", content: "#09090b" })
            ]),

            Body({ class: "app-container bg-background relative flex flex-auto flex-col min-h-screen max-w-full will-change-contents z-10" }, [
                MainLayout(children)
            ])
        ]
    );

export default WebsitePage;
