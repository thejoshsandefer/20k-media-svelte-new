<script lang="ts">
	export let projectTitle: string;
	export let image: string;
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<div class="project-container">
	<div class="peekaboo"><img src={image} alt="" /></div>
	<h3 class="project-title">{projectTitle}</h3>
</div>

<style>
	img {
		height: 400px;
		width: 300px;
		object-fit: cover;
		object-position: left top;
		transition: object-position 8s ease-in-out;
		border-radius: 20px;
	}
	img:hover {
		object-position: left bottom;
	}
	h3 {
		text-align: center;
		opacity: 0.7;
		font-size: var(--body-font-size);
	}
</style>
