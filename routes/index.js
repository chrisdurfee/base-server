import { Builder } from '@base-framework/base';
import express from 'express';
import { MainPage } from "../src/components/pages/main-page.js";
import { TestPage } from "../src/components/pages/test-page.js";

const router = express.Router();

/**
 * This will render the page using base.
 *
 * @param {object} page
 * @returns {string}
 */
const render = (page) =>
{
	return Builder.render(page);
};

/* GET home page. */
router.get('/', function(req, res, next) {
	const html = render(MainPage);
	res.send(html);
});

router.get('/test', function(req, res, next) {
	const html = render(TestPage);
	res.send(html);
});

export default router;
