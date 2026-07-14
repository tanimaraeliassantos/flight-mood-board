<template>
	<div class="container">
		<header class="app-header">
			<h1>Flight Mood Board</h1>
			<p>Select your vibe, match with dream flight destinations.</p>
		</header>
		<MoodSelector v-model="selectedMood" />
	</div>
</template>

<script>
	import { ref, computed, defineComponent } from 'vue';
	import MoodSelector from './components/MoodSelector.vue';

	export default defineComponent({
		name: 'App',
		components: {
			MoodSelector,
		},
		setup() {
			const selectedMood = ref('all');

			return {
				selectedMood,
			};
		},
	});
</script>

<style lang="scss">
	@import './styles/main';

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