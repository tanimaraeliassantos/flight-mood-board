<template>
	<div class="destination-card">
		<div class="image-wrapper">
			<img :src="destination.image" :alt="destination.name" />
			<span class="badge">{{ destination.mood }}</span>
		</div>
		<div class="content">
			<h3>{{ destination.name }}</h3>
			<button class="book-btn">Find Flights</button>
		</div>
	</div>
</template>

<script>
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'DestinationCard',
		props: {
			destination: {
				type: Object,
				required: true,
			},
		},
	});
</script>

<style lang="scss" scoped>
	@use '../styles/variables' as *;
	@use '../styles/mixins' as *;

	.destination-card {
		background: white;
		border-radius: $border-radius;
		overflow: hidden;
		@include card-shadow;
	}

	.image-wrapper {
		position: relative;
		height: 200px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.badge {
			position: absolute;
			top: 10px;
			right: 10px;
			background: rgba($primary-color, 0.9);
			color: white;
			padding: 0.3rem 0.8rem;
			border-radius: 20px;
			font-size: 0.8rem;
			text-transform: uppercase;
			font-weight: bold;
			letter-spacing: 0.5px;
		}
	}

	.content {
		padding: 1.5rem;

		h3 {
			margin: 0 0 1rem 0;
			color: $primary-color;
		}

		.book-btn {
			width: 100%;
			background-color: $accent-color;
			color: white;
			border: none;
			padding: 0.7rem;
			border-radius: 8px;
			font-weight: bold;
			cursor: pointer;
			transition: background 0.2s;

			&:hover {
				background-color: darkred;
			}
		}
	}
</style>
