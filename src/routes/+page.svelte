<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import ServiceCard from '../components/ServiceCard.svelte';
	import Button from '../components/Button.svelte';
	import Hero from './sections/Hero.svelte';
	import Services from './sections/Services.svelte';
	import About from './sections/About.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero />
<About />
<Services />

<style>
</style>
