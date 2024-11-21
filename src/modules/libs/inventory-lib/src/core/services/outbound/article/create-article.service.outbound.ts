import { ArticleInput } from '@/inventory-lib/core/model/inputs';
import { ArticleEntity } from '@/inventory-lib/core/model/entities';

export interface CreateArticleServiceOutbound {
  /**
   * Creates a new article in the system.
   *
   * @param article The information of the article to be created.
   * @returns A promise that resolves to the newly created article.
   */
  createArticle(article: ArticleInput): Promise<ArticleEntity>;
}
