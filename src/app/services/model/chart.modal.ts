interface AdditionalData {
    className: string;
    value: string;
}

export interface ChartModel {
    count: number;
    color: AdditionalData;
    description: string;
    additionalData: AdditionalData[];
}
