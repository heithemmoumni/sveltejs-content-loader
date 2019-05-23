import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		width: 400,
		height: 130
	}
});

window.app = app;

export default app;


