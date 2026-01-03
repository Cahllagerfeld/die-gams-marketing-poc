<script lang="ts">
	import { motion } from "../../lib/motion.svelte";

	interface Props {
		title: string;
		description: string;
		image: string;
		delay?: number;
	}

	let { title, description, image, delay = 0 }: Props = $props();
</script>

<div
	{@attach motion({
		frames: { opacity: [0, 1], y: [30, 0] },
		options: { duration: 0.6, delay, ease: "easeOut" },
	})}
	class="group relative aspect-4/3 overflow-hidden rounded-xl"
>
	<img
		src={image}
		alt={title}
		class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
		loading="lazy"
	/>
	<!-- Gradient overlay -->
	<div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
	<!-- Text -->
	<div class="absolute inset-x-0 bottom-0 p-6">
		<h3 class="font-heading text-xl font-medium text-white md:text-2xl">{title}</h3>
		<p class="mt-1 text-sm text-white/80">{description}</p>
	</div>
</div>
