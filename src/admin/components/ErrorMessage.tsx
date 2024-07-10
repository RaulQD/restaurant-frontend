import React from "react"

export const ErrorMessage = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="text-start text-red-500 text-xs font-outfit">{children}</div>
  )
}
