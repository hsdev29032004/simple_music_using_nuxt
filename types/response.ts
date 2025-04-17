export type TResponse<T = any> = {
    status: "error" | "success";
    message?: string;
    msg?: string;
    data: T;
}