<script>
	import { ColorThemeProvider } from 'svelte-elegant';
</script>

<ColorThemeProvider>
	<div class="app">
		<main>
			<slot />
		</main>
	</div>
</ColorThemeProvider>