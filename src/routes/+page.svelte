<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import ServiceCard from '../components/ServiceCard.svelte';
	import Button from '../components/Button.svelte';
	import Hero from './sections/Hero.svelte';
	import Services from './sections/Services.svelte';
	import About from './sections/About.svelte';
	import RecentProjects from './sections/RecentProjects.svelte';
	import Testimonials from './sections/Testimonials.svelte';
	import RecentPosts from './sections/RecentPosts.svelte';
	import Contact from './sections/Contact.svelte';

	export let data: any;
	console.log(data.props.posts);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero />
<Services />
<About />
<RecentProjects />
<Testimonials />
<RecentPosts posts={data.props.posts} />
<Contact />

<style>
</style>
