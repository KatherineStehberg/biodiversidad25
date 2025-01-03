import Image from 'next/image'
import { cn } from "@/lib/utils"

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
}

export function Avatar({ src, alt, fallback, className, ...props }: AvatarProps) {
  return (
    <div className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )} {...props}>
      {src ? (
        <Image
          src={src}
          alt={alt || "Avatar"}
          fill
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-muted">
          {fallback ? (
            <span className="text-sm font-medium uppercase">{fallback}</span>
          ) : (
            <span className="text-sm font-medium uppercase">{alt ? alt[0] : '?'}</span>
          )}
        </div>
      )}
    </div>
  )
}

export const AvatarImage = Avatar
export const AvatarFallback = Avatar

