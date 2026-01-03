<script lang="ts">
	import { motion } from "../../lib/motion.svelte";

	interface Props {
		image: string;
		category: string;
		tagline: string;
		description: string;
		href?: string;
		delay?: number;
	}

	let { image, category, tagline, description, href = "#", delay = 0 }: Props = $props();
</script>

<article
	{@attach motion({
		frames: { opacity: [0, 1], y: [30, 0] },
		options: { duration: 0.6, delay, ease: "easeOut" },
	})}
	class="group bg-warm-50 overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg"
>
	<!-- Image -->
	<div class="aspect-4/3 overflow-hidden">
		<img
			src={image}
			alt={category}
			class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
		/>
	</div>

	<!-- Content -->
	<div class="p-6">
		<p class="text-forest-700 mb-1 text-sm font-medium">{tagline}</p>
		<h3 class="font-heading text-gams-grey-900 mb-3 text-2xl">{category}</h3>
		<p class="text-gams-grey-600 mb-4 text-sm leading-relaxed">
			{description}
		</p>
		<a
			{href}
			class="text-forest-700 hover:text-forest-500 inline-flex items-center gap-1 font-medium transition-colors"
		>
			Entdecken
			<svg
				class="h-4 w-4 transition-transform group-hover:translate-x-1"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
			</svg>
		</a>
	</div>
</article>
