<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

	export const buttonVariants = tv({
		base: "group inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg whitespace-nowrap outline-none disabled:pointer-events-none disabled:opacity-50",
		variants: {
			variant: {
				primary: "bg-forest-700 text-white hover:bg-forest-500 shadow-lg",
				secondary: "border border-forest-700 text-forest-700 hover:bg-forest-700 hover:text-white",
				"hero-secondary":
					"border border-white/50 text-white backdrop-blur-sm hover:border-white hover:bg-white/20",
				ghost:
					"border border-forest-300/50 text-forest-100 hover:border-forest-300 hover:bg-forest-300/10",
				link: "text-forest-700 hover:text-forest-500",
			},
			size: {
				sm: "px-5 py-2.5 text-sm gap-1.5",
				md: "px-6 py-3 text-sm gap-2",
				lg: "px-7 py-3.5 text-sm sm:px-9 sm:text-base gap-2",
			},
		},
		compoundVariants: [
			{
				variant: "link",
				class: "px-0 py-0 gap-1",
			},
		],
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
	export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

	export type ButtonProps = HTMLButtonAttributes &
		HTMLAnchorAttributes & {
			variant?: ButtonVariant;
			size?: ButtonSize;
			icon?: boolean | "arrow" | "chevron";
			label?: string;
		};
</script>

<script lang="ts">
	let {
		class: className,
		variant = "primary",
		size = "md",
		href,
		type = "button",
		disabled,
		icon = false,
		label,
		children,
		...restProps
	}: ButtonProps = $props();

	const showIcon = $derived(icon !== false);
	const iconType = $derived(icon === true ? "arrow" : icon);
</script>

{#snippet iconSvg()}
	{#if iconType === "chevron"}
		<svg
			class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
		</svg>
	{:else}
		<svg
			class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
		</svg>
	{/if}
{/snippet}

{#if href}
	<a
		data-slot="button"
		class={buttonVariants({ variant, size, class: className })}
		href={disabled ? undefined : href}
		aria-disabled={disabled}
		role={disabled ? "link" : undefined}
		tabindex={disabled ? -1 : undefined}
		{...restProps}
	>
		{#if label}{label}{:else}{@render children?.()}{/if}
		{#if showIcon}{@render iconSvg()}{/if}
	</a>
{:else}
	<button
		data-slot="button"
		class={buttonVariants({ variant, size, class: className })}
		{type}
		{disabled}
		{...restProps}
	>
		{#if label}{label}{:else}{@render children?.()}{/if}
		{#if showIcon}{@render iconSvg()}{/if}
	</button>
{/if}
