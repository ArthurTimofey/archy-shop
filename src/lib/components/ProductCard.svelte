<script lang="ts">
	export let link = '#';
	export let image = 'https://picsum.photos/200';
	export let title: string;
	export let price: string;
	export let currency = '€';
</script>

<a href="{link}" class="block group">
	<img src="{image}" alt="" class="object-cover w-full rounded aspect-square" />

	<div class="mt-3">
		<h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
			{title}
		</h3>

		<p class="mt-1 text-sm text-gray-700">{currency}{price}</p>
	</div>
</a>
