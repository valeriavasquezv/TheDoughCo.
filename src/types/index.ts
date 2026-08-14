export type Unit = 'g' | 'kg' | 'ml' | 'l' | 'un';

export interface Ingredient {
  id: string;
  name: string;
  category: string;
  supplier: string;
  purchasePackage: number; // Ej: 1000
  unit: Unit;
  netPrice: number; // Precio sin IVA
  vatRate: number; // Ej: 0.19
  priceWithVat: number;
  inputMode: 'NET' | 'GROSS'; // Cómo fue ingresado
  purchaseDate: string;
  notes?: string;
  costPerBaseUnit: number; // Costo por g, ml o unidad sin IVA
}

export interface PriceHistoryEntry {
  id: string;
  ingredientId: string;
  ingredientName: string;
  date: string;
  oldPriceNet: number;
  newPriceNet: number;
  supplier: string;
}

export interface RecipeIngredient {
  ingredientId: string;
  quantity: number;
  unit: Unit;
}

export interface Recipe {
  id: string;
  name: string;
  category: string;
  yieldUnits: number; // Ej: 20 galletas
  ingredients: RecipeIngredient[];
}

export interface FixedCost {
  id: string;
  name: string;
  category: string;
  type: 'Luz' | 'Agua' | 'Gas' | 'Internet' | 'Arriendo' | 'Mantención' | 'Otro';
  amountNet: number;
  periodicity: 'Mensual' | 'Anual';
  date: string;
  notes?: string;
}

export interface VariableCost {
  id: string;
  name: string;
  costNet: number; // Costo por unidad de producto
}

export interface LaborCost {
  id: string;
  personName: string;
  role: string;
  hourlyRate: number;
  hoursSpent: number;
  recipeId?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  recipeId: string;
  yieldUnits: number;
  packagingCosts: VariableCost[];
  laborCostIds: string[];
  allocatedFixedCost: number; // Asignación manual o proporcional por unidad
  salePriceNet: number;
  salePriceWithVat: number;
  priceInputMode: 'NET' | 'GROSS';
  isActive: boolean;
}

export interface AppConfig {
  vatRate: number; // Default 0.19 (19%)
  targetMargin: number; // Default 0.40 (40%)
  currencySymbol: string; // "$"
  currencyCode: string; // "CLP"
  maxFoodCostPercentage: number; // Default 35%
}
