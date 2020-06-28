'use strict';
const React = require('react');
const Text = require('ink');
const SelectInput = require('ink-select-input').default;
const open = require('open');

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const createItems = items => {
	for (const item of items) {
		item.key = item.url || item.label;
	}

	return items;
};

const items = createItems([
	{
		label: 'Website',
		url: 'https://063.jp'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/Goryudyuma'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/Goryudyuma'
	},
	{
		label: 'Blog',
		url: 'https://goryudyuma.hatenablog.jp'
	},
	{
		label: 'Contact(Twitter)',
		url: 'https://twitter.com/Goryudyuma'
	},
	{
		label: '---------'
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
]);

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>よろしく。</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
