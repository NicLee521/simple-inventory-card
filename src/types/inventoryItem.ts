export interface SanitizedItemData {
  aliases: string;
  autoAddEnabled: boolean;
  autoAddIdToDescriptionEnabled: boolean;
  autoAddToListQuantity: number;
  barcode: string;
  category: string;
  description: string;
  desiredQuantity: number;
  expiryAlertDays: number;
  expiryDate: string;
  location: string;
  name: string;
  price: number;
  quantity: number;
  todoList: string;
  todoQuantityPlacement: string;
  unit: string;
  servingSize?: string;
  servingsPerUnit?: number;
  caloriesPerServing?: number;
  proteinPerServing?: number;
  carbohydratesPerServing?: number;
  fatPerServing?: number;
}

export interface ItemData {
  aliases?: string;
  autoAddEnabled?: boolean;
  autoAddIdToDescriptionEnabled?: boolean;
  autoAddToListQuantity?: number;
  barcode?: string;
  category?: string;
  description?: string;
  desiredQuantity?: number;
  expiryAlertDays?: number;
  expiryDate?: string;
  location?: string;
  locationQuantities?: string[];
  name: string;
  price?: number;
  quantity?: number;
  todoList?: string;
  todoQuantityPlacement?: string;
  unit?: string;
  servingSize?: string;
  servingsPerUnit?: number;
  caloriesPerServing?: number;
  proteinPerServing?: number;
  carbohydratesPerServing?: number;
  fatPerServing?: number;
}

export interface RawFormData {
  aliases: string;
  autoAddEnabled: boolean;
  autoAddIdToDescriptionEnabled: boolean;
  autoAddToListQuantity: string;
  barcode: string;
  category: string;
  description: string;
  desiredQuantity: string;
  expiryAlertDays: string;
  expiryDate: string;
  location: string;
  name: string;
  price: string;
  quantity: string;
  todoList: string;
  todoQuantityPlacement: string;
  unit: string;
  servingSize?: string;
  servingsPerUnit?: string;
  caloriesPerServing?: string;
  proteinPerServing?: string;
  carbohydratesPerServing?: string;
  fatPerServing?: string;
}
