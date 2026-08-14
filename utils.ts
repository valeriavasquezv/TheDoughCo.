import type { AppData, Ingredient, Product, ProductCosting, Recipe } from './types'

export const uid = () => crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`

export const money = (n: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(Math.round(n || 0))

export const percent = (n: number) => `${(n * 100).toFixed(1)}%`

export const normalize = (n: number) => Number.isFinite(n) ? n : 0

export const grossFromNet = (net: number, iva: number) => net * (1 + iva)
export const netFromGross = (gross: number, iva: number) => gross / (1 + iva)

export const ingredientUnitCost = (i: Ingredient) => {
  if (!i.purchaseQuantity) return 0
  return i.priceNet / i.purchaseQuantity
}

export const getRecipeCost = (recipe: Recipe | undefined, ingredients: Ingredient[]) => {
  if (!recipe) return 0
  return recipe.ingredients.reduce((sum, line) => {
    const ingredient = ingredients.find(i => i.id === line.ingredientId)
    if (!ingredient) return sum
    return sum + ingredientUnitCost(ingredient) * line.quantity
  }, 0)
}

export const monthlyAmount = (amount: number, periodicity: string) => {
  if (periodicity === 'weekly') return amount * 52 / 12
  if (periodicity === 'annual') return amount / 12
  return amount
}

export const getFixedMonthly = (data: AppData) =>
  data.otherCosts.filter(c => c.type === 'fixed').reduce((sum, c) => sum + monthlyAmount(c.amount, c.periodicity), 0)

export const getVariableOtherForProduct = (data: AppData, productId: string) =>
  data.otherCosts.filter(c => c.type === 'variable' && c.productIds.includes(productId))
    .reduce((sum, c) => sum + c.amount, 0)

export const getLaborForProduct = (data: AppData, productId: string) =>
  data.labor.filter(l => l.productId === productId).reduce((sum, l) => sum + l.hourlyRate * l.hours, 0)

export const costProduct = (data: AppData, product: Product): ProductCosting => {
  const recipe = data.recipes.find(r => r.id === product.recipeId)
  const ingredientCost = getRecipeCost(recipe, data.ingredients)
  const packagingCost = data.otherCosts.find(c => c.id === product.packagingCostId && c.type === 'variable')?.amount || 0
  const variableOtherCost = getVariableOtherForProduct(data, product.id)
  const laborCost = getLaborForProduct(data, product.id)
  const fixedCostAllocated = getFixedMonthly(data) / Math.max(1, data.products.filter(p => p.status === 'active').length)
  const yieldUnits = Math.max(1, product.yield || recipe?.yield || 1)
  const totalCost = ingredientCost + packagingCost + variableOtherCost + laborCost + fixedCostAllocated
  const unitCost = totalCost / yieldUnits
  const netPrice = product.priceMode === 'net' ? product.price : netFromGross(product.price, data.settings.iva)
  const iva = netPrice * data.settings.iva
  const grossPrice = netPrice + iva
  const profit = netPrice - unitCost
  const margin = netPrice ? profit / netPrice : 0
  const foodCost = netPrice ? (ingredientCost / yieldUnits) / netPrice : 0
  return { ingredientCost, packagingCost, variableOtherCost, laborCost, fixedCostAllocated, totalCost, unitCost, netPrice, iva, grossPrice, profit, margin, foodCost }
}

export const emptyData = (): AppData => ({
  ingredients: [],
  recipes: [],
  otherCosts: [],
  labor: [],
  products: [],
  settings: { iva: 0.19, targetMargin: 0.5, currency: 'CLP', businessName: 'Mi Pastelería' }
})
