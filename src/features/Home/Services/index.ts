import { Get, Post } from 'Utilities/Request';

/**
 * Get Sample Api
 */
export const GetSampleAPI = async (): Promise<string> => Get<string>('/sample');

/**
 * Post Sample API
 */
export const PostSampleAPI = async (payload: string): Promise<string> => Post<string>('/sample', payload);
