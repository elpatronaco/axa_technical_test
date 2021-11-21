export interface IGnome {
  id: number
  name: string
  thumbnail: string
  age: number
  weight: number
  height: number
  hair_color: string
  professions: Array<string>
  friends: Array<string>
}

export interface IGnomeDto {
  Brastlewark: IGnome[]
}
