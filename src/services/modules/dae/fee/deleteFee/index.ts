import { baseAPI } from '@/services';

export async function deleteFee(id: string): Promise<void> {
    try {
        await baseAPI.delete(`DAETax/${id}`);
    } catch (error: any) {
        return error;
    }
}
