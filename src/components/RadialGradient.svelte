<script lang="ts">
	export let gradientColor: String;
	export let size: String;
	export let scale: String;
</script>

<div class="radial-gradient" style="--gradient-size: {size}">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		version="1.1"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		xmlns:svgjs="http://svgjs.dev/svgjs"
		viewBox="0 0 800 800"
		opacity="1"
		><defs
			><filter
				id="bbblurry-filter"
				x="-100%"
				y="-100%"
				width="400%"
				height="400%"
				filterUnits="objectBoundingBox"
				primitiveUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feGaussianBlur
					stdDeviation="130"
					x="0%"
					y="0%"
					width="100%"
					height="100%"
					in="SourceGraphic"
					edgeMode="none"
					result="blur"
				/></filter
			></defs
		><g filter="url(#bbblurry-filter)"
			><ellipse
				rx="150"
				ry="150"
				cx="408.87360130429875"
				cy="370.080173352626"
				fill={gradientColor}
			/></g
		></svg
	>
</div>

<style>
	.radial-gradient {
		height: 100%;
		width: 100%;
		animation: pulse 4s ease-in-out infinite;
		animation-delay: 2s;
	}
	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(3);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
