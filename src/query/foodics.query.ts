export type FoodicsFilterKey = `filter[${string}]`;
export type FoodicsSortValue = `-${string}` | string;
export type FoodicsSortDirection = 'asc' | 'desc';

export type FoodicsQuery = {
  page: number;
  sort?: FoodicsSortValue;
  include: string;
} & {
  [key: string]: string;
};

export interface FoodicsFiltering<T> {
  readonly by: T;
  readonly match: string | number | Date | boolean;
}

export interface FoodicsSorting<T> {
  readonly by: T;
  readonly dir: FoodicsSortDirection;
}

export interface DefaultFoodicsQuery<T> {
  readonly filtering: FoodicsFiltering<T>[];
  readonly sorting?: FoodicsSorting<T>;
  readonly page?: number;
  readonly include?: T[];
}

export interface FoodicsQueryResponse<T> {
  readonly data: T[];
  readonly meta: FoodicsQueryMeta;
}

export interface FoodicsQueryMeta {
  readonly from: number;
  readonly to: number;
  readonly total: number;
  readonly current_page: number;
  readonly last_page: number;
  readonly per_page: number;
}
