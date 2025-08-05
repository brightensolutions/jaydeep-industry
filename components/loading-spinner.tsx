"use client"
import { Loader2 } from "lucide-react"

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full">
      <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
