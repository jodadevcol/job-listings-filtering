export type ContractType = "Part Time" | "Contract" | "Casual" | "Full Time"

export type Languages = "HTML" | "CSS" | "JavaScript" | "Python" | "Ruby"

export type Tools = "React" | "Sass" | "Vue" | "RoR" | "Django"

export type Level = "Junior" | "Midweight" | "Senior"

export type Role = "FrontEnd" | "BackEnd" | "FullStack"

export type Jobs = Job[]

export interface Company {
  id: string,
  name: string,
  img: string,
  logo?: boolean
}

export interface Job {
  id: string,
  position: string,
  company: Company,
  featured: boolean,
  releaseDate: Date,
  contract: ContractType,
  location: string,
  languages: Languages[],
  tools: Tools[],
  level: Level,
  role: Role
}