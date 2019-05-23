import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'svelte-content-loader',
	}
});

window.app = app;

export default app;


