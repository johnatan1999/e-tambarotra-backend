export interface PasswordHashServiceOutbound {
  /**
   * @description Hashes a given password.
   * @param {string} password The password to hash.
   * @returns {Promise<string>} The hashed password.
   */
  hashPassword(password: string): Promise<string>;

  /**
   * @description Compares a given password with a given hash.
   * @param {string} password The password to compare.
   * @param {string} hash The hash to compare with.
   * @returns {Promise<boolean>} Whether the password matches the hash.
   */
  comparePassword(password: string, hash: string): Promise<boolean>;
}
