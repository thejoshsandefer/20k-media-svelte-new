<script lang="ts">
	import Button from './Button.svelte';

	export let serviceName: string;
	export let buttonLink: string;
</script>

<div class="container peekaboo">
	<slot />
	<h3>{serviceName}</h3>
	<!-- <a href={buttonLink}>Learn More</a> -->
</div>

<style>
	.container {
		background-color: var(--black);
		padding: 2.5rem 2rem;
		border-radius: 8px;
		width: 150px;
		/* height: 200px; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: var(--white);
		margin: 1rem;
		position: relative;
	}
	.container:hover {
		cursor: pointer;
	}
	h3 {
		font-size: 22px;
		text-align: center;
	}
	svg {
		fill: var(--black);
	}
</style>
