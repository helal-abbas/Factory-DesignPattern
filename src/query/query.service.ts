import { Injectable } from "@nestjs/common";
import { DefaultFoodicsQuery, FoodicsQuery } from "./foodics.query";

@Injectable()
export class QueryService {
  build<T extends string>({ filtering, sorting, include, page = 1 }: DefaultFoodicsQuery<T>): FoodicsQuery {
    const query = { page } as FoodicsQuery;

    for (const filter of filtering) {
      query[`filter[${filter.by}]`] = filter.match.toString();
    }

    if (sorting) {
      query.sort = `${sorting.dir === 'asc' ? '' : '-'}${sorting.by as string}`;
    }
    

    if (include) {
      query.include = include.join();
    }

    return query;
  }
}
