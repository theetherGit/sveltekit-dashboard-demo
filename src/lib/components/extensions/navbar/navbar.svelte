<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import HeaderNavbar from './header-navbar.svelte';
	import SideNavbar from './side-navbar.svelte';

	let currentPage: Array<string> = [];
	let pageParams: Array<string> = [];

	$: if (browser) {
		currentPage = $page.url.pathname.split('/');
		if ($page.params) {
			pageParams = Object.keys($page.params);
		}
	}
</script>

<div class="flex flex-1 flex-col bg-background">
	<HeaderNavbar {currentPage} {pageParams} />
	<div class="h-full">
		<div
			class="z-0 mt-4 hidden w-[var(--radix-menubar-content-available-width)] max-w-md flex-grow flex-col gap-4 overflow-y-auto bg-background/10 pt-10 lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r"
		>
			<SideNavbar {currentPage} {pageParams} />
		</div>
		<div class="flex h-full flex-1 flex-col lg:pl-64">
			<main class="mt-8 w-full flex-1">
				<div class="mx-auto px-4 py-14 lg:px-8 2xl:w-10/12">
					<slot />
				</div>
			</main>
		</div>
	</div>
</div>
