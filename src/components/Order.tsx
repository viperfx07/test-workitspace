import clsx from 'clsx'
import * as React from 'react'
import { IOrder, OrderType } from '../models/IOrder.d'
import { IShopifyOrderLineItem, IShopifyPayload, IShopifyShippingPurchased } from '../models/IShopifyOrder'
import { IWooLineItem, IWooPayload } from '../models/IWooOrder'
import { OrderDetailWarehouse, OrderDetailWarehouseOrderItemOption, OrderDetailWarehouseOrderLineItem } from './OrderDetailWarehouse'
import { OrderDetailInventory, IInventoryShippingDetails } from './OrderDetailInventory'

import OrderHeader from './OrderHeader'

export enum SYSTEMTYPE {
	WAREHOUSE = 'warehouse',
	INVENTORY = 'inventory',
}

export interface OrderProps {
	className?: string;
	order: IOrder;
	children?: React.ReactNode;
	orderType?: SYSTEMTYPE;
}

export const Order: React.SFC<OrderProps> = ({ className, order, orderType }) => {
	const renderShopifyOrder = () => {
		const payload = order.payload as IShopifyPayload

		const shippingDetails = {
			contactEmail: payload.shipping_details.contact_email,
			contactName: payload.shipping_details.contact_name,
			address: payload.shipping_details.address,
		} as IInventoryShippingDetails

		return (
			<>
				<OrderHeader
					orderNumber={payload.order_number}
					orderDate={order.created_at}
					channel={order.integration.name}
				/>
				{orderType === SYSTEMTYPE.WAREHOUSE ? (
					<OrderDetailWarehouse
						orderLineItems={payload.order_line_items.map(
							(item: IShopifyOrderLineItem) =>
								({
									sku: item.SKU,
									description: item.description,
									quantity: item.quantity,
									options: item.options.map(
										(itemOption) =>
											({
												name: itemOption.name,
												value: itemOption.value,
											} as OrderDetailWarehouseOrderItemOption),
									),
								} as OrderDetailWarehouseOrderLineItem),
						)}
						shippingPurchased={payload.shipping_purchased}
					/>
				) : (
					<OrderDetailInventory
						orderLineItems={payload.order_line_items.map(
							(item: IShopifyOrderLineItem) =>
								({
									sku: item.SKU,
									description: item.description,
									quantity: item.quantity,
									options: item.options.map(
										(itemOption) =>
											({
												name: itemOption.name,
												value: itemOption.value,
											} as OrderDetailWarehouseOrderItemOption),
									),
								} as OrderDetailWarehouseOrderLineItem),
						)}
						shippingDetails={shippingDetails}
					/>
				)}
			</>
		)
	}
	const renderWooOrder = () => {
		const payload = order.payload as IWooPayload

		const shippingPurchased : IShopifyShippingPurchased = {
			service_name: payload.ShippingType,
			amount_paid: payload.ShippingPrice,
			currency: payload.Currency,
		}

		const shippingDetails = {
			contactEmail: payload.ShippingContactEmail,
			contactName: payload.ShippingContactName,
			address: payload.ShippingAddress,
		} as IInventoryShippingDetails

		return (
			<>
				<OrderHeader orderNumber={payload.Ref} orderDate={order.created_at} channel={order.integration.name} />
				{orderType === SYSTEMTYPE.WAREHOUSE ? (
					<OrderDetailWarehouse
						orderLineItems={payload.LineItems.map(
							(item: IWooLineItem) =>
								({
									sku: item.Sku,
									description: item.Description,
									quantity: item.Quantity,
									options: item.Options.map((itemOption: string) => {
										const x = payload.Options.find((opt) => opt.Id === itemOption)

										return {
											name: x?.Name,
											value: x?.Value,
										} as OrderDetailWarehouseOrderItemOption
									}),
								} as OrderDetailWarehouseOrderLineItem),
						)}
						shippingPurchased={shippingPurchased}
					/>
				) : (
					<OrderDetailInventory
						orderLineItems={payload.LineItems.map(
							(item: IWooLineItem) =>
								({
									sku: item.Sku,
									description: item.Description,
									quantity: item.Quantity,
									options: item.Options.map((itemOption: string) => {
										const x = payload.Options.find((opt) => opt.Id === itemOption)

										return {
											name: x?.Name,
											value: x?.Value,
										} as OrderDetailWarehouseOrderItemOption
									}),
								} as OrderDetailWarehouseOrderLineItem),
						)}
						shippingDetails={shippingDetails}
					/>
				)}
			</>
		)
	}

	return (
		<div className={clsx('border', className)}>
			{order.integration.name === OrderType.SHOPIFY && renderShopifyOrder()}
			{order.integration.name === OrderType.WOO && renderWooOrder()}
		</div>
	)
}
