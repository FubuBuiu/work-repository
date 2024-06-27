import { baseAPI } from '@/services';

export async function deleteFee(id: string): Promise<void> {
    try {
        await baseAPI.put(`DAETax/${id}`);
    } catch (error: any) {
        return error;
    }
}
