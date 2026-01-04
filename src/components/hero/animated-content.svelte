<script lang="ts">
	import { motion } from "../../lib/motion.svelte";
	import Divider from "../ui/divider.svelte";
	import Button from "../ui/button.svelte";
</script>

<div class="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
	<!-- Logo -->
	<div
		{@attach motion({
			frames: { opacity: [0, 1], y: [-15, 0] },
			options: { duration: 0.8, ease: "easeOut" },
		})}
		class="mx-auto mb-10 w-24 sm:w-32"
	>
		<img
			src="https://die-gams.info/wp-content/uploads/2025/02/gams_rechts-512x1024.png"
			alt="Die Gams Logo"
			class="h-auto w-full"
		/>
	</div>

	<!-- Headline -->
	<h1
		{@attach motion({
			frames: { opacity: [0, 1], y: [20, 0] },
			options: { duration: 0.8, delay: 0.15, ease: "easeOut" },
		})}
		class="font-heading mb-6 text-5xl font-normal tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
	>
		Die Gams
	</h1>

	<!-- Decorative divider -->
	<Divider variant="light" delay={0.35} class="mb-8" />

	<!-- Tagline -->
	<p
		{@attach motion({
			frames: { opacity: [0, 1] },
			options: { duration: 0.8, delay: 0.45, ease: "easeOut" },
		})}
		class="font-heading mx-auto mb-5 max-w-xl text-lg font-light text-white/90 italic drop-shadow sm:text-xl md:text-2xl"
	>
		Wenn Ruhe, Kraft und Natur zu einem Gefühl werden
	</p>

	<!-- Subtitle -->
	<p
		{@attach motion({
			frames: { opacity: [0, 1] },
			options: { duration: 0.8, delay: 0.55, ease: "easeOut" },
		})}
		class="mx-auto mb-10 max-w-md text-sm text-white/80 drop-shadow sm:text-base"
	>
		Ihr Hotel Resort in Bad Hindelang im Allgäu
	</p>

	<!-- CTA Buttons -->
	<div
		{@attach motion({
			frames: { opacity: [0, 1], y: [15, 0] },
			options: { duration: 0.8, delay: 0.65, ease: "easeOut" },
		})}
		class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
	>
		<Button variant="primary" size="lg">Verfügbarkeit prüfen</Button>
		<Button variant="hero-secondary" size="lg">Entdecken</Button>
	</div>
</div>
