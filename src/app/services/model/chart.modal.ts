interface ChartAdditionalData {
    className: string;
    value: string;
}

export interface ChartModel {
    count: number;
    color: ChartAdditionalData;
    description: string;
    additionalData: ChartAdditionalData[];
}
