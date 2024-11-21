import { tv, type VariantProps } from 'tailwind-variants';

import type { Button as ButtonPrimitive } from 'bits-ui';

const buttonVariants = tv({
	base: 'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
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
			link: 'text-primary underline-offset-4 hover:underline'
		},
		size: {
			default: 'h-10 px-4 py-2',
			sm: 'h-9 rounded-md px-3',
			lg: 'h-11 rounded-md px-8',
			icon: 'h-10 w-10',
			cyber: 'px-10 py-[4px]'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export { buttonVariants, type Events as ButtonEvents, type Props as ButtonProps, type Events, type Props };
