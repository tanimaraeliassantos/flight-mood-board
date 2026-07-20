<template>
	<div class="container">
		<header class="app-header">
			<h1>Flight Mood Board</h1>
			<p>Select your vibe, match with dream flight destinations.</p>
		</header>

		<MoodSelector v-model="selectedMood" />
		<DestinationGrid :items="filteredDestinations" />
	</div>
</template>

<script>
	import { ref, computed, defineComponent } from 'vue';
	import MoodSelector from './components/MoodSelector.vue';
	import DestinationGrid from './components/DestinationGrid.vue';
	import { destinations, filterDestinations } from './utils/destinations.js';

	export default defineComponent({
		name: 'App',
		components: { MoodSelector, DestinationGrid },
		setup() {
			const selectedMood = ref('all');

			const filteredDestinations = computed(() => {
				return filterDestinations(destinations, selectedMood.value);
			});

			return {
				selectedMood,
				filteredDestinations,
			};
		},
	});
</script>

<style lang="scss">
	@use './styles/main';
	@use './styles/variables' as *;

	.app-header {
		text-align: center;
		margin-bottom: 3rem;

		h1 {
			font-size: 2.5rem;
			color: $primary-color;
			margin-bottom: 0.5rem;
		}

		p {
			color: #718096;
			font-size: 1.1rem;
		}
	}
</style>
