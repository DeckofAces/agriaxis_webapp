export interface CropMonitoringAnalysis {
    id: string;
    farm_name: string;
    status: 'processing' | 'completed';
    payment: number;
    date: string;
}