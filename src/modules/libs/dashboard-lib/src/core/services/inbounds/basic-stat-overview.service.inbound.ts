import { BasicStatOverviewEntity } from '@/dashboard-lib/core/models/entities';

export const GET_BASIC_STAT_OVERVIEW_SERVICE_INBOUND =
  'GET_BASIC_STAT_OVERVIEW_SERVICE_INBOUND';

/**
 * Inbound interface for getting basic statistics overview in the system.
 *
 * @interface GetBasicStatOverviewServiceInbound
 */
export interface GetBasicStatOverviewServiceInbound {
  /**
   * Gets basic statistics overview.
   *
   * @param {number} businessId - The ID of the business.
   * @returns {Promise<BasicStatOverviewEntity>} - The basic statistics overview.
   */
  getBasicStatOverview(businessId: number): Promise<BasicStatOverviewEntity>;
}
