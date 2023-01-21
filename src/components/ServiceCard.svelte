<script lang="ts">
	import Button from './Button.svelte';

	export let serviceName: string;
	export let buttonLink: string;
</script>

<div class="container">
	<slot />
	<h3>{serviceName}</h3>
	<!-- <a href={buttonLink}>Learn More</a> -->
</div>

<style>
	.container {
		background-color: var(--white);
		padding: 2.5rem 2rem;
		border-radius: 8px;
		width: 150px;
		height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: var(--black);
		margin: 1rem;
		transition: box-shadow 0.8s cubic-bezier(0.2, 1, 0.3, 1);
	}
	.container:hover {
		box-shadow: 0px 5px 30px 0px var(--off-white);
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
