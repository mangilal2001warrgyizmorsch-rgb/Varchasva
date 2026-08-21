import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export const PrimaryButton = ({ children, className = "", onClick, type = "button", disabled }: { children: React.ReactNode, className?: string, onClick?: () => void, type?: "button" | "submit" | "reset", disabled?: boolean }) => (
  <motion.button 
    type={type}
    onClick={onClick}
    disabled={disabled}
    whileHover={disabled ? {} : { scale: 1.03, backgroundColor: "#fff", color: "#000" }}
    whileTap={disabled ? {} : { scale: 0.97 }}
    className={`inline-flex items-center justify-center gap-2 bg-[#e2a325] text-black rounded-full font-bold uppercase tracking-[0.15em] transition-all relative overflow-hidden group border border-[#e2a325] px-6 py-2.5 text-[10px] ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
  >
    <span className="relative z-10 whitespace-nowrap inline-flex items-center gap-1.5">{children}</span> 
    <ArrowRight size={13} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
  </motion.button>
);

export const SecondaryButton = ({ children, className = "border-white/30 text-white hover:text-[#e2a325]", onClick, type = "button" }: { children: React.ReactNode, className?: string, onClick?: () => void, type?: "button" | "submit" | "reset" }) => (
  <motion.button 
    type={type}
    onClick={onClick}
    whileHover={{ scale: 1.03, backgroundColor: "rgba(226, 163, 37, 0.1)", borderColor: "#e2a325" }}
    whileTap={{ scale: 0.97 }}
    className={`inline-flex items-center justify-center gap-2 bg-transparent border rounded-full font-bold uppercase tracking-[0.15em] transition-all whitespace-nowrap px-6 py-2.5 text-[10px] ${className}`}
  >
    {children}
  </motion.button>
);

export { Button, buttonVariants }

