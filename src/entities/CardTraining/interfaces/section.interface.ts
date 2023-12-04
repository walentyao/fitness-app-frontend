export interface ISection {
  title: string
  value: string
  style?: string
}

export interface ITraining {
  title: string
  style?: string
  params: ISection[]
}
