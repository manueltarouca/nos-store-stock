export interface Color {
    ColorId: number;
    Color: string;
    ColorName: string;
    Unavailable: boolean;
    HasInstallmentPayment: boolean;
    ProductId: string;
    ProductDetailUrl: string;
    ProductDetailOldUrl: string;
}

export interface CreditInfoList {
    Months: string;
    MonthlyPayment: number;
    InitialPayment: number;
    isPrincipal: boolean;
}

export interface CreditInfoToShow {
    Months: string;
    MonthlyPayment: number;
    InitialPayment: number;
    isPrincipal: boolean;
}

export interface CreditInfoCampaignToShow {
    Months: string;
    MonthlyPayment: number;
    InitialPayment: number;
    isPrincipal: boolean;
}

export interface Product {
    Id: string;
    Title: string;
    Description: string;
    PriceAsDecimal: number;
    Price: string;
    PlusPoints?: any;
    PreviousPrice: string;
    PreviousPriceAsDecimal: number;
    PreviousSpecialPrice: string;
    PreviousSpecialPriceAsDecimal: number;
    ShowPrice: boolean;
    Discount: string;
    DiscountCampaign: string;
    DiscountCampaignAsDecimal: number;
    DiscountInstallmentCampaign: string;
    DiscountInstallmentCampaignAsDecimal: number;
    DiscountAsDecimal: number;
    DiscountText: string;
    DiscountTextPrecosNos?: any;
    DiscountTextPrestacoesPrecosNos?: any;
    LabelDiscountCampaign: string;
    LabelDiscountCampaignInstallments: string;
    ExclusivoECN: boolean;
    BrandId: string;
    BrandName: string;
    ModelId: string;
    ModelName: string;
    Image: string;
    CharacteristicsSummary: any[];
    Colors: Color[];
    ProductType: string;
    ProductDetailUrl: string;
    ProductDetailOldUrl: string;
    ButtonTextToProductDetail?: any;
    ProductOrderUrl?: any;
    CanOrder: boolean;
    CanPreReserve: boolean;
    CanReserve: boolean;
    IsSoldOut: boolean;
    StorePrice: string;
    StorePriceAsDecimal: number;
    EtiquetaLista: string;
    ShowInstallmentPrice: boolean;
    ShowOneShotPrice: boolean;
    CreditInfoList: CreditInfoList[];
    CreditInfoToShow: CreditInfoToShow;
    CreditInfoCampaignToShow: CreditInfoCampaignToShow;
    PriceOrder: string;
}

export interface Query {
    Campaign: string;
    MinPrice: number;
    MaxPrice: number;
    Brand: number;
    Model: number;
    ProductType: string;
    Category: string;
    OnlyWithPoints: boolean;
    Limit: number;
    OffSet: number;
    OrderBy: string;
    OrderByAscending: boolean;
    CapabilitySearch: any[];
}

export interface OperationStatus {
    Success: boolean;
    Message: string;
    ReturnCode: string;
}

export interface Data {
    Products: Product[];
    TotalProducts: number;
    Query: Query;
    OperationStatus: OperationStatus;
}

export interface EquipmentsStore {
    Success: boolean;
    Code: number;
    ErrorCode: number;
    ErrorMessage: string;
    Message: string;
    Data: Data;
}