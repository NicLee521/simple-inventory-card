import { ELEMENTS } from '../../utils/constants';

/** Renders the collapsible nutrition fields shared by add and edit modals. */
export function nutrition(prefix: string): string {
  const field = (id: string, label: string, suffix = '', type = 'number') => `
    <div class="input-group nutrition-field">
      <label for="${prefix}-${id}">${label}</label>
      <div class="nutrition-input"><input type="${type}" ${type === 'number' ? 'min="0" step="any"' : ''} id="${prefix}-${id}" />${suffix ? `<span>${suffix}</span>` : ''}</div>
    </div>`;

  return `<details class="nutrition-section" open>
    <summary>Nutrition</summary>
    <div class="nutrition-fields">
      ${field(ELEMENTS.SERVING_SIZE, 'Serving size', '', 'text')}
      ${field(ELEMENTS.SERVINGS_PER_UNIT, 'Servings / unit')}
      ${field(ELEMENTS.CALORIES_PER_SERVING, 'Calories / serving')}
      ${field(ELEMENTS.PROTEIN_PER_SERVING, 'Protein', 'g')}
      ${field(ELEMENTS.CARBOHYDRATES_PER_SERVING, 'Carbohydrates', 'g')}
      ${field(ELEMENTS.FAT_PER_SERVING, 'Fat', 'g')}
    </div>
  </details>`;
}
