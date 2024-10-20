export type TileButton = {
  title: string
  value: string
}

export interface SelectedOption {
  value: string
  label: string
  disabled?: boolean
  icon?: string
}

export interface BaseOption {
  name: string
  placeholder: string
  variant: 'select' | 'input'
  selected: SelectedOption
  options?: SelectedOption[]
}

export interface LoginFormStore {
  bookmaker: OptionWithChoices
  login: BaseOption
  password: BaseOption
}

export interface OptionWithChoices extends BaseOption {
  options?: SelectedOption[]
}

export type FilterOption = BaseOption | OptionWithChoices
export type AccountOption = BaseOption | OptionWithChoices

export interface FilterInputSelectStore {
  preset: BaseOption
  bookmaker: OptionWithChoices
  status: OptionWithChoices
  bed: OptionWithChoices
  active: BaseOption
  balance: OptionWithChoices
  login?: BaseOption
  password?: BaseOption
  icon?: BaseOption
}

export type TableItem = {
  id: number
  name: string
  connected: boolean
  createdAt: string
  bookmaker: string
  login: string
  password: string
}

export type TableItems = TableItem[]

export type SelectedType = {
  value: string
  label: string
  icon?: string
}

export type Options = SelectedOption[]

export interface BaseOption {
  name: string
  placeholder: string
  variant: 'select' | 'input'
  selected: SelectedOption
  options?: SelectedOption[]
}

export interface OptionWithChoices extends BaseOption {
  options?: SelectedOption[]
}

export type StoreKey = 'filterInputSelect' | 'loginForm'