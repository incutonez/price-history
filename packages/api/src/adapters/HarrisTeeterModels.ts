export interface HarrisTeeterModel {
	_id: IdModel;
	costSummary: CostSummaryModel;
	items: ItemModel;
	numberOfItems: number;
	orderStatus: string;
	isRefundable: boolean;
	purchase: PurchaseModel;
	purchaseType: string;
	receiptCreateDateTime: ReceiptCreateDateTimeModel;
	storeInfo: StoreInfoModel;
	terminalNumber: string;
	bannerKey: string;
}

export interface IdModel {
	oid: string;
}

export interface CostSummaryModel {
	total: string;
	totalTax: string;
	itemSalesAndCouponSavings: string;
	feeOriginal: string;
	feePaid: string;
	feeSavings: string;
	coupons: unknown[];
	couponTotal: string;
	otherFees: unknown[];
	otherFeeTotal: string;
	subTotal: string;
	savings: string;
	boostSavings: string;
	alcoholSubTotal: string;
}

export interface ItemModel {
	purchasedData: PurchasedDatumModel;
	catalogData: CatalogDatumModel;
}

export interface PurchasedDatumModel {
	upc: string;
	itemType: string;
	isGiftCard: boolean;
	displayInfo: DisplayInfoModel;
	pricingInfo: PricingInfoModel;
	isWeighted: boolean;
	quantityInfo: QuantityInfoModel;
}

export interface DisplayInfoModel {
	description: string;
	imageUrl: string;
	customerFacingSize: string;
}

export interface PricingInfoModel {
	originalUnitPrice: string;
	unitPricePaid: string;
	totalPricePaid: string;
	hasEstimatedUnitPricePaid: boolean;
	priceModifiers: unknown[];
	totalSavings: string;
	originalTotalPricePaid: string;
}

export interface QuantityInfoModel {
	received: number;
	notReceived: number;
	substitutes: number;
	addAllToCart: number;
}

export interface CatalogDatumModel {
	upc: string;
}

export interface PurchaseModel {
	receiptId: string;
	fulfillment: FulfillmentModel;
}

export interface FulfillmentModel {
	divisionNumber: string;
	storeNumber: string;
	locationId: string;
}

export interface ReceiptCreateDateTimeModel {
	value: string;
	timezone: string;
}

export interface StoreInfoModel {
	vanityName: string;
	address: AddressModel;
	location: LocationModel;
}

export interface AddressModel {
	addressLines: string[];
	cityTown: string;
	name: string;
	postalCode: string;
	stateProvince: string;
	residential: boolean;
	countryCode: string;
}

export interface LocationModel {
	lat: number;
	lng: number;
}
