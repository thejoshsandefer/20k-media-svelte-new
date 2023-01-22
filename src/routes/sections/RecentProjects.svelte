<script>
	import RecentProject from '/src/components/RecentProject.svelte';

	const projects = [
		{
			projectTitle: 'Be Spotted',
			image:
				'https://20k.media/wp-content/uploads/2022/11/screencapture-be-spotted-2022-11-05-14_20_04-scaled.jpg'
		},
		{
			projectTitle: 'Be Spotted',
			image:
				'https://20k.media/wp-content/uploads/2022/11/screencapture-be-spotted-2022-11-05-14_20_04-scaled.jpg'
		},
		{
			projectTitle: 'Be Spotted',
			image:
				'https://20k.media/wp-content/uploads/2022/11/screencapture-be-spotted-2022-11-05-14_20_04-scaled.jpg'
		},
		{
			projectTitle: 'Be Spotted',
			image:
				'https://20k.media/wp-content/uploads/2022/11/screencapture-be-spotted-2022-11-05-14_20_04-scaled.jpg'
		},
		{
			projectTitle: 'Be Spotted',
			image:
				'https://20k.media/wp-content/uploads/2022/11/screencapture-be-spotted-2022-11-05-14_20_04-scaled.jpg'
		},
		{
			projectTitle: 'Be Spotted',
			image:
				'https://20k.media/wp-content/uploads/2022/11/screencapture-be-spotted-2022-11-05-14_20_04-scaled.jpg'
		}
	];
</script>

<section>
	<h2>Recent Projects</h2>
	<div class="inner-container">
		{#each projects as project}
			<RecentProject projectTitle={project.projectTitle} image={project.image} />
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-wrap: wrap;
		gap: 50px;
		padding: 50px 5%;
	}
	.inner-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 50px;
		max-width: 1050px;
	}
</style>
