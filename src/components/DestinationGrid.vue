<template>
	<div class="grid-wrapper">
		<div v-if="items.length > 0" class="grid">
			<DestinationCard
				v-for="item in items"
				:key="item.id"
				:destination="item"
			/>
		</div>
		<div v-else class="no-results">
			No destinations found for this mood! Try another.
		</div>
	</div>
</template>

<script>
	import { defineComponent } from 'vue';
	import DestinationCard from './DestinationCard.vue';

	export default defineComponent({
		name: 'DestinationGrid',
		components: { DestinationCard },
		props: {
			items: {
				type: Array,
				required: true,
			},
		},
	});
</script>

<style lang="scss" scoped>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 2rem;
	}

	.no-results {
		text-align: center;
		padding: 3rem;
		font-size: 1.2rem;
		color: #718096;
	}
</style>
