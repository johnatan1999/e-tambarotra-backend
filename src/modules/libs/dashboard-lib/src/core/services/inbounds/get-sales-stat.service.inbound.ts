import { SalesStatEntity } from '@/dashboard-lib/core/models/entities';

export const GET_SALES_STAT_SERVICE_INBOUND = 'GET_SALES_STAT_SERVICE_INBOUND';

/**
 * Inbound interface for getting sales statistics in the system.
 *
 * @interface GetSalesStatServiceInbound
 * @param {number} businessId - The ID of the business.
 * @param {Date} startDate - The start date of the sales statistics.
 * @param {Date} endDate - The end date of the sales statistics.
 * @returns {Promise<SalesStatEntity[]>} - The sales statistics.
 */
export interface GetSalesStatServiceInbound {
  getSalesStat(
    businessId: number,
    startDate: Date,
    endDate: Date,
  ): Promise<SalesStatEntity[]>;
}
