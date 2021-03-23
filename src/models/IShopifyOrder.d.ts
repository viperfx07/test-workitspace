export interface IShopifyOption {
    name: string;
    value: string;
    option_id: number;
}

export interface IShopifyOrderLineItem {
    product_variant_id: number;
    SKU: string;
    description: string;
    quantity: number;
    options: IShopifyOption[];
}

export interface IShopifyShippingPurchased {
    service_name: string;
    amount_paid: number;
    currency: string;
}

export interface IShopifyCustomerDetails {
    id: number;
    name: string;
    email: string;
}

export interface IShopifyShippingDetails {
    contact_name: string;
    contact_email: string;
    address: string[];
}

export interface IShopifyPayload {
    id: number;
    order_number: string;
    order_line_items: IShopifyOrderLineItem[];
    shipping_purchased: IShopifyShippingPurchased;
    customer_details: IShopifyCustomerDetails;
    shipping_details: IShopifyShippingDetails;
}
