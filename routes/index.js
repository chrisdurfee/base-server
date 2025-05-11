import { Builder } from '@base-framework/base';
import express from 'express';
import { AboutPage } from "../src/components/pages/about/about-page.js";
import { HomePage } from "../src/components/pages/home/home-page.js";
import { WebsitePage } from '../src/components/pages/website-page.js';

const router = express.Router();

/**
 * This will render the page using base.
 *
 * @param {object} page
 * @returns {string}
 */
const render = (page) =>
{
	const website = createPage(page);
	return Builder.render(website);
};

/**
 * This will create the website page.
 *
 * @param {object} page
 * @returns {object}
 */
const createPage = (page) => (
	WebsitePage([
		page
	])
);

/* GET home page. */
router.get('/', function (req, res, next)
{
	const html = render(HomePage());
	console.log(html)
	res.send(html);
});

router.get('/about', function (req, res, next)
{
	const html = render(AboutPage());
	res.send(html);
});

export default router;
