export interface Data {
  projects: Project[]
}

export interface Project {
  challenge: string
  description: string
  id: string
  industry: string
  keyAways: KeyAway[]
  role: string
  solution: string
  systemImages: string[]
  title: string
}

export interface KeyAway {
  description: string
  key: string
}
