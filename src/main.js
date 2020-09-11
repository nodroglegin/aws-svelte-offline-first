import Amplify from '@aws-amplify/core';
import App from './App.svelte';
import aws_exports from './aws-exports';

// in this way you are only importing Auth and configuring it.
Amplify.configure(aws_exports);

const app = new App({
  target: document.body
});

window.app = app;

export default app;
