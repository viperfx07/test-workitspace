import capitalize from 'lodash.capitalize'
import { IShopifyShippingPurchased } from '../models/IShopifyOrder'

export interface OrderDetailWarehouseOrderItemOption {
	name: string
	value: string
}

export interface OrderDetailWarehouseOrderLineItem {
	variantId?: string
	sku: string
	description: string
	quantity: number
	unitPrice?: number
	options: OrderDetailWarehouseOrderItemOption[]
}

export interface OrderDetailWarehouseProps {
	orderLineItems: OrderDetailWarehouseOrderLineItem[]
	shippingPurchased: IShopifyShippingPurchased
}

export const OrderDetailWarehouse: React.SFC<OrderDetailWarehouseProps> = ({ orderLineItems, shippingPurchased }) => {
	return (
		<div className="p-8 text-body2 text-black-high-emphasis">
			<div className="flex pb-2 border-b-2 justify-between">
				<div>
					<span>{orderLineItems.length}</span> item{orderLineItems.length > 1 ? 's' : ''}
				</div>
				<div>
					To Pick
					<svg
						className="ml-2 inline-block"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M18 17H6V15H18V17ZM18 13H6V11H18V13ZM18 9H6V7H18V9ZM3 22L4.5 20.5L6 22L7.5 20.5L9 22L10.5 20.5L12 22L13.5 20.5L15 22L16.5 20.5L18 22L19.5 20.5L21 22V2L19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2V22Z"
							fill="#728F9B"
						/>
					</svg>
				</div>
			</div>
			<div className="divide-y mt-7.5">
				{orderLineItems.map((item) => {
					return (
						<div key={item.sku} className="pt-3 mb-4 flex">
							<div>
								<img
									className="object-cover"
									src="https://unsplash.it/75/94"
									alt={`${item.sku}`}
									width="75"
									height="94"
								/>
							</div>
							<div className="ml-6 flex-1">
								<div>{item.description}</div>
								<div>
									{item.options.map((opt) => (
										<div key={item.sku + opt.name}>
											{capitalize(opt.name)}: <span className="font-medium">{opt.value}</span>
										</div>
									))}
								</div>
								<div>SKU: {item.sku}</div>
							</div>
						</div>
					)
				})}
			</div>
			{/* Shipping info */}
			<div className="mt-8">
				<h2 className="text-subtitle1 pb-2 border-b-2">Shipping Information</h2>
				<div className="mt-4">
					<div className="flex justify-between">
						<div className="font-medium">Service purchased</div>
						<div className="text-right">{shippingPurchased.service_name}</div>
					</div>
					<div className="flex justify-between">
						<div className="font-medium">Shipping paid</div>
						<div className="text-right">
							{shippingPurchased.currency} {shippingPurchased.amount_paid}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
