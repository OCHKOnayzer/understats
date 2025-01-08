<script lang="ts" module>
	import { type VariantProps, tv } from 'tailwind-variants';

	export const badgeVariants = tv({
		base: 'items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground hover:bg-primary/80 border-transparent',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent',
				destructiveGreen: 'bg-[#51D679] text-[#106208] inline-block',
				outline: 'text-foreground',
				stats: 'bg-[#363A45] text-[#FEFEFC] text-[14px] border-none rounded-[8px] py-2 px-4',
				statsNot: 'bg-[#BDCFFF] text-[#5D58EE] text-[14px] border-none rounded-[8px] py-[10px] px-[15px] flex items-center',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	});

	export type BadgeVariant = VariantProps<typeof badgeVariants>['variant'];
</script>

<script lang="ts">
	import { cn } from '$utils/utils.ts';

	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		href,
		class: className,
		variant = 'default',
		children,
		...restProps
	}: WithElementRef<HTMLAnchorAttributes> & {
		variant?: BadgeVariant;
	} = $props();
</script>

<svelte:element
	this={href ? 'a' : 'span'}
	bind:this={ref}
	{href}
	class={cn(badgeVariants({ variant, className }))}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
