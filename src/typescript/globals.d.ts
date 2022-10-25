export interface Type {
    name: string
    url: string
}

export interface PokemonTypes {
    slot: number
    type: Type
}

export interface Pokemon {
    id: number
    name: string
    height: number
    weight: number
    types: PokemonTypes[]
    generation: number
    imageUrl: string
}