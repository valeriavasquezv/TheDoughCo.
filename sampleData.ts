import type { AppData } from './types'
import { uid } from './utils'

export function createSampleData(): AppData {
  const harina = uid(), azucar = uid(), mantequilla = uid(), huevos = uid(), chocolate = uid(), cacao = uid(), vainilla = uid()
  const recipeCookie = uid(), recipeBrownie = uid()
  const packCookie = uid(), packBrownie = uid()
  const productCookie = uid(), productBrownie = uid()

  return {
    settings: { iva: 0.19, targetMargin: 0.5, currency: 'CLP', businessName: 'Dulce Atelier' },
    ingredients: [
      { id: harina, name: 'Harina', category: 'Secos', supplier: 'Proveedor Demo', purchaseFormat: 'Bolsa', purchaseQuantity: 1000, unit: 'g', priceNet: 1200, priceInputMode: 'net', purchaseDate: '2026-08-01', notes: '', history: [] },
      { id: azucar, name: 'Azúcar', category: 'Secos', supplier: 'Proveedor Demo', purchaseFormat: 'Bolsa', purchaseQuantity: 1000, unit: 'g', priceNet: 1300, priceInputMode: 'net', purchaseDate: '2026-08-01', notes: '', history: [] },
      { id: mantequilla, name: 'Mantequilla', category: 'Lácteos', supplier: 'Proveedor Demo', purchaseFormat: 'Barra', purchaseQuantity: 250, unit: 'g', priceNet: 2200, priceInputMode: 'net', purchaseDate: '2026-08-02', notes: '', history: [] },
      { id: huevos, name: 'Huevos', category: 'Frescos', supplier: 'Proveedor Demo', purchaseFormat: 'Docena', purchaseQuantity: 12, unit: 'un', priceNet: 3200, priceInputMode: 'net', purchaseDate: '2026-08-02', notes: '', history: [] },
      { id: chocolate, name: 'Chocolate', category: 'Chocolatería', supplier: 'Proveedor Demo', purchaseFormat: 'Bolsa', purchaseQuantity: 500, unit: 'g', priceNet: 5500, priceInputMode: 'net', purchaseDate: '2026-08-03', notes: '', history: [] },
      { id: cacao, name: 'Cacao', category: 'Secos', supplier: 'Proveedor Demo', purchaseFormat: 'Bolsa', purchaseQuantity: 250, unit: 'g', priceNet: 3000, priceInputMode: 'net', purchaseDate: '2026-08-03', notes: '', history: [] },
      { id: vainilla, name: 'Vainilla', category: 'Saborizantes', supplier: 'Proveedor Demo', purchaseFormat: 'Frasco', purchaseQuantity: 100, unit: 'ml', priceNet: 2800, priceInputMode: 'net', purchaseDate: '2026-08-03', notes: '', history: [] }
    ],
    recipes: [
      { id: recipeCookie, name: 'Cookie Chocolate Chip', category: 'Galletas', yield: 20, notes: 'Receta demo', ingredients: [
        { id: uid(), ingredientId: harina, quantity: 300, unit: 'g' },
        { id: uid(), ingredientId: azucar, quantity: 150, unit: 'g' },
        { id: uid(), ingredientId: mantequilla, quantity: 120, unit: 'g' },
        { id: uid(), ingredientId: huevos, quantity: 2, unit: 'un' },
        { id: uid(), ingredientId: chocolate, quantity: 180, unit: 'g' },
        { id: uid(), ingredientId: vainilla, quantity: 4, unit: 'ml' }
      ]},
      { id: recipeBrownie, name: 'Brownie Chocolate', category: 'Pastelería', yield: 12, notes: 'Receta demo', ingredients: [
        { id: uid(), ingredientId: harina, quantity: 180, unit: 'g' },
        { id: uid(), ingredientId: azucar, quantity: 180, unit: 'g' },
        { id: uid(), ingredientId: mantequilla, quantity: 140, unit: 'g' },
        { id: uid(), ingredientId: huevos, quantity: 3, unit: 'un' },
        { id: uid(), ingredientId: chocolate, quantity: 200, unit: 'g' },
        { id: uid(), ingredientId: cacao, quantity: 35, unit: 'g' }
      ]}
    ],
    otherCosts: [
      { id: packCookie, name: 'Packaging Cookie', category: 'Packaging', type: 'variable', amount: 180, periodicity: 'once', date: '2026-08-01', productIds: [productCookie], notes: '' },
      { id: packBrownie, name: 'Caja Brownie', category: 'Packaging', type: 'variable', amount: 450, periodicity: 'once', date: '2026-08-01', productIds: [productBrownie], notes: '' },
      { id: uid(), name: 'Luz', category: 'Servicios', type: 'fixed', amount: 90000, periodicity: 'monthly', date: '2026-08-01', productIds: [], notes: '' },
      { id: uid(), name: 'Agua', category: 'Servicios', type: 'fixed', amount: 30000, periodicity: 'monthly', date: '2026-08-01', productIds: [], notes: '' },
      { id: uid(), name: 'Gas', category: 'Servicios', type: 'fixed', amount: 55000, periodicity: 'monthly', date: '2026-08-01', productIds: [], notes: '' },
      { id: uid(), name: 'Arriendo', category: 'Generales', type: 'fixed', amount: 450000, periodicity: 'monthly', date: '2026-08-01', productIds: [], notes: '' }
    ],
    labor: [
      { id: uid(), person: 'Persona Demo', workType: 'Producción', hourlyRate: 4000, hours: 2, productId: productCookie, recipeId: recipeCookie, notes: '' },
      { id: uid(), person: 'Persona Demo', workType: 'Producción', hourlyRate: 4000, hours: 1.5, productId: productBrownie, recipeId: recipeBrownie, notes: '' }
    ],
    products: [
      { id: productCookie, name: 'Cookie Chocolate Chip', category: 'Galletas', recipeId: recipeCookie, yield: 20, packagingCostId: packCookie, laborIds: [], price: 2500, priceMode: 'gross', status: 'active' },
      { id: productBrownie, name: 'Brownie Chocolate', category: 'Pastelería', recipeId: recipeBrownie, yield: 12, packagingCostId: packBrownie, laborIds: [], price: 3500, priceMode: 'gross', status: 'active' }
    ]
  }
}
