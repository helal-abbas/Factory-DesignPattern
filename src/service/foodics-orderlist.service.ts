import { FoodicsOrder, FoodicsOrderQueryProps } from "src/entity/foodis-order.entity";
import { FoodicsError, OrderListModel } from "src/models/order.model";
import { DefaultFoodicsQuery, FoodicsQueryResponse } from "src/query/foodics.query";
import { QueryService } from "src/query/query.service";
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { HttpStatus } from "@nestjs/common";
import { plainToInstance } from "class-transformer";

export class FoodicsOrderList{
    constructor(private readonly queryService: QueryService, private readonly http: HttpService) {}

    async getOrders(
    query: DefaultFoodicsQuery<FoodicsOrderQueryProps>,
    token: string,
  ): Promise<FoodicsQueryResponse<FoodicsOrder>> {
    const params = this.queryService.build(query);
    const response = await firstValueFrom(
      this.http.get<FoodicsQueryResponse<FoodicsOrder> | FoodicsError>(`https://api-sandbox.foodics.com/v5/orders`, {
        headers: { authorization: `Bearer ${token}` },
        params,
      }),
    );

    if (response.status !== HttpStatus.OK) {
      throw new Error((response.data as FoodicsError).data);
    }

    const data = response.data as FoodicsQueryResponse<FoodicsOrder>;

    return { data: plainToInstance(FoodicsOrder, data.data), meta: data.meta };
  }
}