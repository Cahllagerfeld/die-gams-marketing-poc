<script lang="ts">
	import { motion } from "../../lib/motion.svelte";
	import Divider from "../ui/divider.svelte";
</script>

<div class="mx-auto max-w-3xl px-6 text-center">
	<!-- Top decorative divider -->
	<Divider variant="dark" delay={0} class="mb-10" />

	<!-- Headline -->
	<h2
		{@attach motion({
			frames: { opacity: [0, 1], y: [20, 0] },
			options: { duration: 0.8, delay: 0.15, ease: "easeOut" },
		})}
		class="font-heading text-gams-grey-900 mb-8 text-3xl font-light tracking-tight md:text-4xl lg:text-5xl"
	>
		Ankommen. Aufatmen. Aufleben.
	</h2>

	<!-- Body text -->
	<p
		{@attach motion({
			frames: { opacity: [0, 1] },
			options: { duration: 0.8, delay: 0.3, ease: "easeOut" },
		})}
		class="text-gams-grey-700 mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl"
	>
		Zwischen blühenden Wiesen, klarer Bergluft und wärmenden Sonnenstrahlen finden Sie bei uns zu
		sich selbst. Im Herzen des Allgäus, umgeben von majestätischen Gipfeln, wird jeder Moment zur
		Auszeit — ob Sie aktiv die Natur erkunden oder einfach die Stille genießen.
	</p>

	<!-- Bottom decorative divider -->
	<Divider variant="dark" delay={0.45} />
</div>
