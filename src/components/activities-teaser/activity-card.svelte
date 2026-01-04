<script lang="ts">
	import { motion } from "../../lib/motion.svelte";

	interface Props {
		title: string;
		description: string;
		image: string;
		delay?: number;
		class?: string;
	}

	let { title, description, image, delay = 0, class: className = "" }: Props = $props();
</script>

<article
	{@attach motion({
		frames: { opacity: [0, 1], y: [24, 0] },
		options: { duration: 0.5, delay, ease: "easeOut" },
	})}
	class="group relative h-full overflow-hidden rounded-xl {className}"
>
	<!-- Background image -->
	<img
		src={image}
		alt={title}
		class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
		loading="lazy"
	/>

	<!-- Dark overlay gradient -->
	<div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

	<!-- Content -->
	<div class="relative flex h-full flex-col justify-end p-5 md:p-6">
		<h3 class="font-heading text-xl font-medium text-white md:text-2xl">
			{title}
		</h3>
		<p class="mt-1.5 text-sm leading-relaxed text-white/75 md:text-base">
			{description}
		</p>
	</div>

	<!-- Hover indicator -->
	<div
		class="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
	>
		<svg
			class="h-4 w-4 text-white"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
		</svg>
	</div>
</article>
