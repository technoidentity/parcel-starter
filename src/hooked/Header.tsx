import React from 'react'
import { Title } from 'devfractal-ui-core'

interface HeaderProps {
  readonly title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => (
  <Title>{title}</Title>
)
