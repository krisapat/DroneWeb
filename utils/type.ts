export interface Log {
    created: string;
    country: string;
    drone_id: string;
    drone_name: string;
    celsius: number;
}

export interface LogsTableProps {
    page: number;
}