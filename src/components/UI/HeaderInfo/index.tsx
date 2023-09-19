import { ReactNode } from "react";
import './styles.scss'

interface HeaderInfoProps {
  imgUrl: string
  children: ReactNode
}

export function HeaderInfo({ imgUrl, children }: HeaderInfoProps) {
  return (
    <span>
      <img src={imgUrl} alt="" />
      {children}
    </span>
  )
}