export type Weather = {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
    city: string;
    time: string;
    cloud_status?: string;
}