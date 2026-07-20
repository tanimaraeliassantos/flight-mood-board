export const destinations = [
	{
		id: 1,
		name: 'Barcelona',
		mood: 'culture',
		image:
			'https://images.unsplash.com/photo-1579282240050-352db0a14c21?w=500&auto=format&fit=crop&q=60',
	},
	{
		id: 2,
		name: 'Maldives',
		mood: 'relax',
		image:
			'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500&auto=format&fit=crop&q=60',
	},
	{
		id: 3,
		name: 'Iceland',
		mood: 'adventure',
		image:
			'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60',
	},
	{
		id: 4,
		name: 'Tokyo',
		mood: 'food',
		image:
			'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=500&auto=format&fit=crop&q=60',
	},
	{
		id: 5,
		name: 'Rome',
		mood: 'culture',
		image:
			'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&auto=format&fit=crop&q=60',
	},
	{
		id: 6,
		name: 'Swiss Alps',
		mood: 'adventure',
		image:
			'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60',
	},
];

export function filterDestinations(list, mood) {
	if (!mood || mood === 'all') return list;
	return list.filter((item) => item.mood.toLowerCase() === mood.toLowerCase());
}
