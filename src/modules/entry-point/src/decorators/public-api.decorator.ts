import { SetMetadata } from '@nestjs/common';

export const PUBLIC_API_KEY = 'isPublic';
export const PublicApi = () => SetMetadata(PUBLIC_API_KEY, true);
