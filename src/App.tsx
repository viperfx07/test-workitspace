import React from 'react';
import 'typeface-roboto';

import './App.css';
import shopifyOrder from './data/shopify.json'
import wooOrder from './data/woo.json'
import { Order, SYSTEMTYPE } from "./components/Order";

console.log('shopify', shopifyOrder)
console.log('woo', wooOrder)

function App() {
  return (
		<div className="mt-10 flex flex-wrap">
			<div className="flex-1">
				<div className="max-w-103.5 mx-auto">
					<h1 className="text-h6 mb-8">Warehouse Management System</h1>
					<Order order={shopifyOrder} orderType={SYSTEMTYPE.WAREHOUSE} />
					<hr className="my-8" />
					<Order order={wooOrder} orderType={SYSTEMTYPE.WAREHOUSE} />
				</div>
			</div>
			<div className="flex-1">
				<div className="max-w-103.5 mx-auto">
					<h1 className="text-h6 mb-8">Inventory Management System</h1>
					<Order order={shopifyOrder} orderType={SYSTEMTYPE.INVENTORY} />
					<hr className="my-8" />
					<Order order={wooOrder} orderType={SYSTEMTYPE.INVENTORY} />
				</div>
			</div>
		</div>
  )
}

export default App;
