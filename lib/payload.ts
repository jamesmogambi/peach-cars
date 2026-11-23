export const payload = {
  find: async () => ({ docs: [], totalDocs: 0, totalPages: 0 }),
  findByID: async () => null,
  create: async () => null,
  update: async () => null,
  delete: async () => null,
  login: async () => ({ user: null, token: null }),
  logout: async () => null,
};
