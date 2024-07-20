export type ContractType = "Part Time" | "Contract" | "Casual" | "Full Time"

export interface Jobs {
  id: string,
  role: string,
  company: {
    id: string,
    name: string,
    img: string
  }
  featured: boolean,
  releaseDate: Date,
  jobtype: ContractType,
  location: string,
  skills: Array<string>,
}