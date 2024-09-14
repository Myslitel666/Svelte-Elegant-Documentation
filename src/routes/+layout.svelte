<script>
	import { ColorThemeProvider } from 'svelte-elegant';
</script>

<ColorThemeProvider>
	<div>
		<main>
			<slot />
		</main>
	</div>
</ColorThemeProvider>