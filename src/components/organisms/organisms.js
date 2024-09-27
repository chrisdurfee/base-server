import { A, Header, Li, Nav, Ul } from "@base-framework/atoms";

/**
 * HeaderNav
 *
 * This will create a header nav atom.
 *
 * @returns {object}
 */
export const HeaderNav = () => (
    Header([
        Nav([
            Ul([
                Li([
                    A({ href: '/' }, 'Home')
                ]),
                Li([
                    A({ href: '/test' }, 'Test')
                ])
            ])
        ])
    ])
);