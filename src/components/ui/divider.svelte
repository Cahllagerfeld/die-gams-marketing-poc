<script lang="ts">
	import { motion } from "../../lib/motion.svelte";

	interface Props {
		variant?: "light" | "dark";
		animated?: boolean;
		delay?: number;
		class?: string;
	}

	let { variant = "dark", animated = true, delay = 0, class: className = "" }: Props = $props();

	const colors = {
		light: {
			line: "bg-white/50",
			dot: "bg-white",
		},
		dark: {
			line: "bg-gams-grey-300",
			dot: "bg-forest-700",
		},
	};
</script>

{#if animated}
	<div
		{@attach motion({
			frames: { opacity: [0, 1], scaleX: [0.5, 1] },
			options: { duration: 0.6, delay, ease: "easeOut" },
		})}
		class="mx-auto flex items-center justify-center gap-3 {className}"
	>
		<span class="h-px w-10 sm:w-16 {colors[variant].line}"></span>
		<span class="h-1.5 w-1.5 rounded-full {colors[variant].dot}"></span>
		<span class="h-px w-10 sm:w-16 {colors[variant].line}"></span>
	</div>
{:else}
	<div class="mx-auto flex items-center justify-center gap-3 {className}">
		<span class="h-px w-10 sm:w-16 {colors[variant].line}"></span>
		<span class="h-1.5 w-1.5 rounded-full {colors[variant].dot}"></span>
		<span class="h-px w-10 sm:w-16 {colors[variant].line}"></span>
	</div>
{/if}
