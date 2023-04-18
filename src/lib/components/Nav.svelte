<script lang="ts">
	export let title: string;
	export let links: { href: string; label: string }[];
</script>

<header aria-label="Site Header" class="bg-white border-b-teal-400 border-b-4">
	<div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
		<a class="block text-teal-600" href="/">
			<span class="sr-only">Home</span>
			<h1 class="font-bold">{title}</h1>
		</a>

		<div class="flex flex-1 items-center justify-end">
			<nav aria-label="Site Nav" class="hidden md:block">
				<ul class="flex items-center gap-6 text-sm">
					{#each links as link}
						<li>
							<a class="text-gray-500 transition hover:text-gray-500/75" href="{link.href}">
								{link.label}</a
							>
						</li>
					{/each}
				</ul>
			</nav>

			<div class="flex items-center gap-4">
				<button
					class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
				>
					<span class="sr-only">Toggle menu</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</div>
		</div>
	</div>
</header>
