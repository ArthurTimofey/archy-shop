<script lang="ts">
	import { ProductCard } from '$lib/components';

	export let data;

	console.log(data);
</script>

<div class="container mx-auto py-10">
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.products as product}
			<ProductCard title="{product.name}" price="{product.price.toString()}" />
		{/each}
	</div>
</div>
