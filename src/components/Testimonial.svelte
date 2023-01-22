<script lang="ts">
	export let testimonial: string = 'This is a testimonial';
	export let personName: string = 'John Doe';
	export let title: string = 'CEO of Company';
	export let image: string = 'https://via.placeholder.com/150';
</script>

<div class="testimonial-wrapper">
	<div class="inner-container">
		<p class="testimonial">{testimonial}</p>
		<img src={image} alt="" />
		<p class="name">{personName} ({title})</p>
	</div>
</div>

<style>
	.testimonial-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: var(--white);
	}
	.inner-container {
		max-width: 700px;
	}
	.testimonial {
		font-size: var(--h5);
		font-weight: var(--medium);
	}
	img {
		border-radius: 50%;
		height: 98px;
		width: 98px;
	}
	.name {
		font-size: var(--body-font-small);
		font-weight: var(--bold);
		margin-bottom: 25px;
	}
</style>
