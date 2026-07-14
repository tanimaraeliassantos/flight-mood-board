<template>
	<div class="mood-selector">
		<h2>Select Your Mood</h2>
		<div class="mood-options">
			<button
				v-for="mood in moods"
				:key="mood.value"
				:class="['mood-btn', { active: modelValue === mood.value }]"
				@click="$emit('update:modelValue', mood.value)"
			>
				<span class="icon">{{ mood.icon }}</span>
				<span class="label">{{ mood.label }}</span>
			</button>
		</div>
		<p v-if="selectedMood">You selected: {{ selectedMood }}</p>
	</div>
</template>

<script>
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'MoodSelector',
		props: {
			modelValue: {
				type: String,
				required: true,
			},
		},

		emits: ['update:modelValue'],
		setup() {
			const moods = [
				{ value: 'happy', label: 'Happy', icon: '😊' },
				{ value: 'sad', label: 'Sad', icon: '😢' },
				{ value: 'angry', label: 'Angry', icon: '😠' },
				{ value: 'excited', label: 'Excited', icon: '🤩' },
			];
			return { moods };
		},

		computed: {
			selectedMood() {
				const mood = this.moods.find((m) => m.value === this.modelValue);
				return mood ? mood.label : null;
			},
		},
	});
</script>

<style lang="scss" scoped>
	@import '../styles/variables';
	@import '../styles/mixins';

	.mood-selector {
		@include flex-center;
		gap: 1rem;
		margin-bottom: 2.5rem;
		flex-wrap: wrap;
	}

	.mood-btn {
		background: white;
		border: 2px solid transparent;
		padding: 0.8rem 1.5rem;
		border-radius: 30px;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 600;
		font-size: 1rem;
		color: $text-dark;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
		transition: all 0.2s ease;

		&:hover {
			transform: translateY(-2px);
			box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
		}

		&.active {
			border-color: $accent-color;
			background-color: $primary-color;
			color: $text-light;
		}
	}
</style>
