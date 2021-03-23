import { Fragment } from 'react'
import capitalize from 'lodash.capitalize'
import { OrderDetailWarehouseOrderLineItem as IOrderDetailInventoryOrderLineItem } from './OrderDetailWarehouse'

export interface IInventoryShippingDetails {
	contactName: string
	contactEmail: string
	address: string[]
}

export interface IOrderDetailInventoryProps {
	orderLineItems: IOrderDetailInventoryOrderLineItem[]
	shippingDetails: IInventoryShippingDetails
}
export const OrderDetailInventory: React.SFC<IOrderDetailInventoryProps> = ({ orderLineItems, shippingDetails }) => {
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
			<div className="divide-y mt-6">
				{orderLineItems.map((item) => {
					return (
						<div key={item.sku} className="pt-6 first:pt-0 mb-6">
							<div className="flex">
								<div>
									<img
										className="object-cover"
										src="https://unsplash.it/128/160"
										alt={`${item.sku}`}
										width="128"
										height="160"
									/>
								</div>
							</div>
							<div className="mt-6 space-y-3 text-black-medium-emphasis">
								<div>{item.description}</div>
								<div className="divide-x">
									{item.options.map((opt) => (
										<div key={item.sku + opt.name} className="inline-block mr-4 pl-4 first:pl-0">
											{capitalize(opt.name)}: <span className="font-medium">{opt.value}</span>
										</div>
									))}
								</div>
								<div>
									SKU: <span className="font-medium">{item.sku}</span>
								</div>
							</div>
						</div>
					)
				})}
			</div>
			{/* Customer Information */}
			<div className="mt-8">
				<h2 className="text-subtitle1 pb-2 border-b-2">Customer Information</h2>
				<div className="mt-6 text-black-medium-emphasis">
					{shippingDetails.contactName}
					<br />
					{shippingDetails.address.map((item, index) => (
						<Fragment key={item + index}>
							{item}
							{index === 0 || index === shippingDetails.address.length - 2 ? (
								<br />
							) : index !== shippingDetails.address.length - 1 ? (
								', '
							) : (
								''
							)}
						</Fragment>
					))}
					<br />
					<br />
					{shippingDetails.contactEmail}
				</div>
			</div>
		</div>
	)
}
