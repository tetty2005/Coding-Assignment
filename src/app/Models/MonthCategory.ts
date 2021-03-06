import {Category} from './Category';
import {Spending} from './Spending';

export class MonthCategory extends Category {
  public categoryId: string;
  public spendings: Spending[];
  public spendingSum: number;

  constructor(data = null) {
    super(data);
  }

  set(data) {
    super.set(data);
    this.categoryId = data.categoryId;
    this.spendings = data.spendings.map((spending) => new Spending(spending));
    this.spendingSum = data.spendingSum;
  }

  get() {
    const data = super.get();
    data.spendings = data.spendings.map((spending) => ({...spending}));

    return data;
  }

  static fromCategory(category: Category) {
    return new MonthCategory({
      categoryId: category.id,
      ...category.get(),
      spendings: [],
      spendingSum: 0
    });
  }

  addSpending(spending: Spending) {
    this.spendings.push(spending);
    this.spendingSum += spending.sum;
  }
}
