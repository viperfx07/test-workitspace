import clsx from 'clsx';
import formatDate from "date-fns/format";
import capitalize from "lodash.capitalize";
export interface OrderHeaderProps {
	className?: string,
	orderNumber: string,
	orderDate: string,
	channel: string,
}

const OrderHeader: React.SFC<OrderHeaderProps> = ({
	className,
	orderNumber,
	orderDate,
	channel,
}) => {
	return (
		<div className={clsx('text-black-high-emphasis border-b py-6 px-8', className)}>
			<h1 className="text-h6">Order #{orderNumber}</h1>
			<div className="mt-2 text-body2">
				<div className="text-black-medium-emphasis">{formatDate(new Date(orderDate), 'MMM dd, yyyy')}</div>
				<div className="mt-0.5">
					Sales channel: { capitalize(channel.replace('_', ' ')) }
				</div>
			</div>
		</div>
	)
}

export default OrderHeader;
