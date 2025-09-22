import { error } from '@sveltejs/kit';
import { ITEM_DATA } from '../../data.js';

export function load({ params }) {
	const item = ITEM_DATA.find((i) => i.id === parseInt(params.id));

	if (!item) error(404);

	return {
		item
	};
}