import type { Attachment } from "svelte/attachments";
import { animate, type AnimationOptions, type DOMKeyframesDefinition } from "motion";

type MotionOptions = {
	frames: DOMKeyframesDefinition;
	options?: AnimationOptions;
};

export function motion({ frames, options }: MotionOptions): Attachment {
	return (element) => {
		$effect(() => {
			const animation = animate(element, frames, options);
			animation.play();
			return () => {
				animation.cancel();
			};
		});
	};
}
