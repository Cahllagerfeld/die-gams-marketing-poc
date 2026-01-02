<script lang="ts">
	import { motion } from "../../lib/motion.svelte";
</script>

<div
	{@attach motion({
		frames: { opacity: [0, 1] },
		options: { duration: 0.8, delay: 0.9, ease: "easeOut" },
	})}
	class="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
>
	<div class="flex flex-col items-center gap-2">
		<span class="text-xs tracking-widest text-white/60">SCROLL</span>
		<div class="h-10 w-5 rounded-full border border-white/40 p-1">
			<div
				{@attach motion({
					frames: { y: [0, 12, 0], opacity: [1, 0.4, 1] },
					options: { duration: 2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY },
				})}
				class="mx-auto h-1.5 w-1.5 rounded-full bg-white"
			></div>
		</div>
	</div>
</div>
