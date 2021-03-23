import { IShopifyPayload } from "./IShopifyOrder";
import { IWooPayload } from "./IWooOrder";

export const OrderType = {
    SHOPIFY: "shopify",
    WOO: "woo_commerce",
}

export interface IIntegration {
    name: string;
}

export interface IOrder {
    integration: IIntegration;
    created_at: string,
    payload: IShopifyPayload | IWooPayload,
}
