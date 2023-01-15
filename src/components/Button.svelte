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
	/* Default Button Styles */
	.btn {
		position: relative;
		padding: 12px 30px;
		background-color: transparent;
		color: var(--white);
		font-family: var(--body-font-family);
		font-weight: var(--bold);
		border-radius: 27px;
		border: 1px solid var(--red);
		overflow: hidden;
		display: inline-block;
		z-index: 2;
	}
	.btn:hover {
		text-decoration: none;
	}
	.btn::before {
		content: '';
		background-color: var(--red);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -2;
	}
	.btn::after {
		content: '';
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		background-color: var(--black);
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		z-index: -1;
		animation: empty 0.5s ease-in-out 1;
	}
	.btn:hover::after {
		animation: fill 0.8s ease-in-out 1;
		animation-fill-mode: forwards;
	}
	.empty::after {
		animation: empty 0.8s ease-in-out 1;
	}
	@keyframes fill {
		0% {
			width: 0;
		}
		40% {
			width: 100%;
		}
		70% {
			width: 85%;
		}
		100% {
			width: 100%;
		}
	}
	@keyframes empty {
		0% {
			width: 100%;
		}
		100% {
			width: 0;
		}
	}
	.btn.btn-secondary {
		background-color: transparent;
		color: var(--white);
		border: 1px solid var(--white);
	}
	.btn.btn-secondary::before {
		background-color: transparent;
	}
	.btn.btn-secondary::after {
		background-color: var(--red);
	}
</style>
