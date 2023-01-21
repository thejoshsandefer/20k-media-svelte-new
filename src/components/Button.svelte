<script lang="ts">
	export let buttonText: string;
	export let buttonLink: string;
	export let buttonType: string;
	let fill = false;
	let empty = false;

	const animateFill = () => {
		fill = !fill;
		empty = !empty;
	};
</script>

<a
	href={buttonLink}
	class:fill
	class:empty
	class="btn btn-{buttonType}"
	on:mouseenter={animateFill}
	on:mouseleave={animateFill}>{buttonText}</a
>

<style>
</style>
