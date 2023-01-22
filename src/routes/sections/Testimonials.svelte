<script>
	// import Swiper core and required modules
	import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
	import Testimonial from '/src/components/Testimonial.svelte';
	import Title from '/src/components/Title.svelte';

	const testimonials = [
		{
			testimonial:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			personName: 'John Doe',
			title: 'CEO of Company',
			image: 'https://via.placeholder.com/150'
		},
		{
			testimonial: 'This is a testimonial',
			personName: 'John Doe',
			title: 'CEO of Company',
			image: 'https://via.placeholder.com/150'
		},
		{
			testimonial: 'This is a testimonial',
			personName: 'John Doe',
			title: 'CEO of Company',
			image: 'https://via.placeholder.com/150'
		},
		{
			testimonial: 'This is a testimonial',
			personName: 'John Doe',
			title: 'CEO of Company',
			image: 'https://via.placeholder.com/150'
		}
	];
</script>

<section>
	<div class="container">
		<Title titleText="Testimonials" />
		<h3>Listen to our happy clients</h3>
		<Swiper
			class="mySwiper"
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			navigation
			pagination
			spaceBetween={50}
			slidesPerView={1}
			on:slideChange={() => console.log('slide change')}
			on:swiper={(e) => console.log(e.detail[0])}
		>
			{#each testimonials as testimonial}
				<SwiperSlide><Testimonial testimonial={testimonial.testimonial} /></SwiperSlide>
			{/each}
		</Swiper>
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 50px 5%;
		color: var(--white);
	}
	.container {
		background-color: var(--off-white);
		width: var(--content-width);
		max-width: 90%;
		border-radius: 20px;
		padding: 100px;
		position: relative;
		background-image: url(/grid-05.png);
		background-size: cover;
		color: var(--white);
	}
	.container * {
		position: relative;
		z-index: 1000;
	}
	.container::before {
		content: '';
		background-color: black;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.7;
		border-radius: 20px;
		z-index: 1;
	}
	h3 {
		text-align: center;
		margin: 0;
		margin-bottom: 25px;
		z-index: 1000;
	}
	:global(.swiper-button-prev::after),
	:global(.swiper-button-next::after) {
		content: '\e007';
		font-family: '20k-media';
		color: var(--white);
		border: 1px solid var(--white);
		border-radius: 50%;
		padding: 1rem;
		font-size: 1.5rem;
		transition: background-color 0.8s cubic-bezier(0.2, 1, 0.3, 1);
		z-index: 1000;
	}
	:global(.swiper-button-prev:hover::after),
	:global(.swiper-button-next:hover::after) {
		background-color: var(--red);
	}
	:global(.swiper-button-prev::after) {
		margin-left: 25px;
	}
	:global(.swiper-button-next::after) {
		transform: rotate(180deg);
		margin-right: 25px;
	}
	:global(.swiper-pagination-bullet) {
		background-color: var(--red);
	}
	:global(.swiper-pagination) {
		bottom: 0 !important;
	}
</style>
