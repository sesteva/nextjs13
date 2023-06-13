"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Root = DialogPrimitive.Root

const Trigger = DialogPrimitive.Trigger

const Portal = ({
  className,
  children,
  ...props
}: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal className={cn(className)} {...props}>
    <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
      {children}
    </div>
  </DialogPrimitive.Portal>
)
Portal.displayName = DialogPrimitive.Portal.displayName

const overlayVariants = cva(
  "bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0",
  {
    variants: {
      variant: {
        default: "",
        blur: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface OverlayProps
  extends React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>,
    VariantProps<typeof overlayVariants> {}

const Overlay = React.forwardRef<OverlayProps>(
  ({ className, variant, size, ...props }, ref) => (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        overlayVariants({
          variant,
          size,
          className,
        })
      )}
      {...props}
    />
  )
)
Overlay.displayName = DialogPrimitive.Overlay.displayName

const contentVariants = cva(
  "data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none",
  {
    variants: {
      variant: {
        default: "",
        blur: "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface OverlayProps
  extends React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof overlayVariants> {}

const Content = React.forwardRef<OverlayProps>(
  ({ className, variant, size, children, ...props }, ref) => (
    <Portal>
      <Overlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          contentVariants({
            variant,
            size,
            className,
          })
        )}
        {...props}
      >
        {children}
        <Close>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Close>
      </DialogPrimitive.Content>
    </Portal>
  )
)
Content.displayName = DialogPrimitive.Content.displayName

const Header = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
Header.displayName = "DialogHeader"

const Footer = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
Footer.displayName = "DialogFooter"

const titleVariants = cva("text-mauve12 m-0 text-[17px] font-medium", {
  variants: {
    variant: {
      default: "",
      blur: "text-lg font-semibold leading-none tracking-tight",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

export interface TitleProps
  extends React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>,
    VariantProps<typeof titleVariants> {}

const Title = React.forwardRef<TitleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(
        titleVariants({
          variant,
          size,
          className,
        })
      )}
      {...props}
    />
  )
)
Title.displayName = DialogPrimitive.Title.displayName

const Close = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={cn(
      "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
      className
    )}
    {...props}
  />
))
Close.displayName = DialogPrimitive.Close.displayName

const Description = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
Description.displayName = DialogPrimitive.Description.displayName

export {
  Root,
  Trigger,
  Content,
  Header,
  Footer,
  Title,
  Description,
  Portal,
  Overlay,
  Close,
}
