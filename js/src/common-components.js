
var React = require('react');
var ReactDOM = require('react-dom');

// Router and http requests
var page = require( 'page' ); // for page
var request = require( 'superagent' ); // for request

var VelocityComponent = require( 'velocity-react/velocity-component' );

// Markdown
var marked = require( 'marked' ); // for marked

var MJJRS = {
	React: React,
	ReactDOM: ReactDOM,
	page: page,
	request: request,
	marked: marked,
	VelocityComponent: VelocityComponent
};


module.exports = MJJRS;