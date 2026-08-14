export type CostType = 'variable' | 'fixed'
export type Periodicity = 'monthly' | 'weekly' | 'annual' | 'once'
export type PriceMode = 'net' | 'gross'

export interface IngredientPriceHistory {
  id: string
  date: string
  previousNet: number
  newNet: number
  supplier: string
}

export interface Ingredient {
  id: string
  name: string
  category: string
  supplier: string
  purchaseFormat: string
  purchaseQuantity: number
  unit: string
  priceNet: number
  priceInputMode: PriceMode
  purchaseDate: string
  notes: string
  history: IngredientPriceHistory[]
}

export interface RecipeIngredient {
  id: string
  ingredientId: string
  quantity: number
  unit: string
}

export interface Recipe {
  id: string
  name: string
  category: string
  yield: number
  ingredients: RecipeIngredient[]
  notes: string
}

export interface OtherCost {
  id: string
  name: string
  category: string
  type: CostType
  amount: number
  periodicity: Periodicity
  date: string
  productIds: string[]
  notes: string
}

export interface Labor {
  id: string
  person: string
  workType: string
  hourlyRate: number
  hours: number
  productId: string
  recipeId: string
  notes: string
}

export interface Product {
  id: string
  name: string
  category: string
  recipeId: string
  yield: number
  packagingCostId: string
  laborIds: string[]
  price: number
  priceMode: PriceMode
  status: 'active' | 'inactive'
}

export interface AppSettings {
  iva: number
  targetMargin: number
  currency: string
  businessName: string
}

export interface AppData {
  ingredients: Ingredient[]
  recipes: Recipe[]
  otherCosts: OtherCost[]
  labor: Labor[]
  products: Product[]
  settings: AppSettings
}

export interface ProductCosting {
  ingredientCost: number
  packagingCost: number
  variableOtherCost: number
  laborCost: number
  fixedCostAllocated: number
  totalCost: number
  unitCost: number
  netPrice: number
  iva: number
  grossPrice: number
  profit: number
  margin: number
  foodCost: number
}
