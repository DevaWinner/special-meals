import { JSDOM } from 'jsdom';
import updateMealCounter from '../src/modules/counter.js';

// Mock the DOM
const dom = new JSDOM('<!DOCTYPE html><div id="mealContainer"></div><div id="count"></div>');
global.document = dom.window.document;

describe('updateMealCounter', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="mealContainer">
        <div class="meal-card">Meal 1</div>
        <div class="meal-card">Meal 2</div>
        <div class="meal-card">Meal 3</div>
      </div>
      <div id="count"></div>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should update the meal counter with the correct count', () => {
    updateMealCounter();

    const mealCounter = document.getElementById('count');
    expect(mealCounter.textContent).toBe('(3)');
  });

  it('should update the meal counter to 0 if there are no meal cards', () => {
    const mealContainer = document.getElementById('mealContainer');
    mealContainer.innerHTML = '';

    updateMealCounter();

    const mealCounter = document.getElementById('count');
    expect(mealCounter.textContent).toBe('(0)');
  });
});