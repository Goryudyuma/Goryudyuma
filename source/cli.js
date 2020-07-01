#!/usr/bin/env node
"use strict";
const path = require("path");
const termImg = require("term-img");
const terminalImage = require("terminal-image");
const importJsx = require("import-jsx");
const React = require("react");
const { render } = require("ink");

const ui = importJsx("./ui");

const fallback = async () => {
	const image = await terminalImage.file(
		path.join(__dirname, "avatar-fallback.png")
	);
	console.log(image);
};

console.log(termImg(path.join(__dirname, "avatar.png"), { fallback }));

render(React.createElement(ui));
