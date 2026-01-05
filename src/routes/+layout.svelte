<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Greenfield & Associates CPA - Your Trusted Financial Partner</title>
	<meta name="description" content="Expert accounting, tax preparation, and business advisory services. Greenfield & Associates CPA has been helping individuals and businesses achieve financial success for over 40 years." />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
