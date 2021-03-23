export interface IWooLineItem {
    VariantId: string;
    Sku: string;
    Description: string;
    Quantity: number;
    UnitPrice: number;
    Options: string[];
}

export interface IWooOption {
    Id: string;
    Name: string;
    Value: string;
}

export interface IWooPayload {
    Id: string;
    Ref: string;
    Currency: string;
    LineItems: IWooLineItem[];
    Options: IWooOption[];
    ShippingType: string;
    ShippingPrice: number;
    CustomerId: string;
    CustomerName: string;
    CustomerEmail: string;
    ShippingContactName: string;
    ShippingContactEmail: string;
    ShippingAddress: string[];
}
