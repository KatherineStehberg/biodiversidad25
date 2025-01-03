import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils"

interface SelectProps {
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  children: React.ReactNode
  className?: string
}

export const Select: React.FC<SelectProps> = ({ value, onValueChange, placeholder, children, className }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      >
        {value || placeholder}
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-background border border-input rounded-md shadow-lg">
          {children}
        </div>
      )}
    </div>
  )
}

export const SelectItem: React.FC<{ value: string; children: React.ReactNode }> = ({ value, children }) => {
  return (
    <button
      type="button"
      className="w-full text-left px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
      onClick={() => {
        // This will be handled by the parent Select component
      }}
    >
      {children}
    </button>
  )
}

export const SelectContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>
}

export const SelectTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>
}

export const SelectValue: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return <span>{placeholder}</span>
}


