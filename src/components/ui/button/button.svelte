<script lang="ts" module>
	import { type VariantProps, tv } from 'tailwind-variants';

	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	export const buttonVariants = tv({
		base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90',
				destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline: 'border-input bg-background hover:bg-accent hover:text-accent-foreground border border-indigo-800 text-white',
				outlineGray: 'border-input bg-background hover:bg-accent hover:text-accent-foreground border border-gray-800 text-white py-2 px-4',
				outlineYellow:
				'inline-flex h-10 items-center justify-center rounded-md border border-yellow-500 bg-transparent px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-yellow-500/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
				outlineGreen: 'border-input bg-background hover:bg-accent hover:text-accent-foreground border border-green-500 text-white py-2 px-4',
				outlineRounded: 'border-input bg-background hover:bg-indigo-800/50 hover:text-accent-white border border-indigo-800 text-white rounded-full',
				outlineRoundedWhite: 'border-input bg-background hover:bg-black/50 hover:text-accent-white border hover:border-black/50 border-white text-white rounded-full',
				outlineRoundedGreen: 'border-input bg-background hover:bg-accent hover:bg-green-500 border border-green-500 text-white py-2 px-3 rounded-full',
				cyberGreen: 'bg-[#00FF4740]/[.25] text-[#5EC654] line-heigh-[10px] text-[12px] rounded-[5px] pr-5 pl-5 cursor-default',
				cyberRed: 'bg-red-400/50 text-red-300 text-[12px] rounded-[5px] pr-5 pl-5 cursor-default',
				secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				tileChecked: 'bg-violet-500 text-white rounded-[100px]',
				tile: 'bg-gray-500 text-white rounded-[100px] transition-colors hover:opacity-50 transition-all',
				filterButton: 'bg-[#363A45] text-white rounded-[8px] transition-colors hover:bg-gray-500 transition-all',
				filterButtonActive: 'bg-[#171B26] text-white rounded-[8px] transition-colors hover:bg-gray-700 transition-all',
				link: 'text-primary underline-offset-4 hover:underline',
				apply: 'p-[16px] transition-all w-[50%] bg-[#2f3241] text-white rounded-[12px] hover:bg-[#4a4f5c]',
				clear: 'py-[16px] px-[16px] transition-all w-[50%] bg-transparent text-white rounded-[12px] hover:bg-[#4a4f5c] border border-[#4a4f5c]',
				interactive: 'bg-[#363A45] hover:bg-[#2e2f31] p-0 h-[48px] w-[48px] rounded-[12px] transition-colors',
				card: 'bg-[#20242F] rounded-[16px] p-[16px] hover:shadow-lg transition-all',
				not: 'bg-[#31384A] text-white text-[16px] border-none rounded-[16px] py-[16px] flex items-center transition-all',
				transparent: 'bg-transparent text-white text-[16px] border-none rounded-[16px] py-[16px] flex items-center hover:bg-[#20242F] transition-all',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
				cyber: 'px-10 py-[4px]',
				primary: 'py-[12px] w-full',
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	});



	export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
	export type ButtonSize = VariantProps<typeof buttonVariants>['size'];

	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
	WithElementRef<HTMLAnchorAttributes> & {
		variant?: ButtonVariant;
		size?: ButtonSize;
	};
</script>

<script lang="ts">
	import { cn } from '$utils/utils.ts';

	let {
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		href = undefined,
		type = 'button',
		children,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		bind:this={ref}
		class={cn(buttonVariants({ variant, size, className }))}
		{href}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		class={cn(buttonVariants({ variant, size, className }))}
		{type}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
