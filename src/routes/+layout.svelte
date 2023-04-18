<script lang="ts">
	import '../app.postcss';
	import { Nav } from '$lib/components';

	const title = 'Archy Shop';
	const links = [
		{ href: '/', label: 'Shop' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<Nav title="{title}" links="{links}" />
<div class="space-y-4">
	<slot />
</div>
