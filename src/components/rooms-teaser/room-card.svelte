<script lang="ts">
	import { motion } from "../../lib/motion.svelte";
	import Button from "../ui/button.svelte";

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
		<Button {href} variant="link" icon="chevron">Entdecken</Button>
	</div>
</article>
