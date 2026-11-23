export const payload = {
  find: async (_args?: any): Promise<{ docs: any[]; totalDocs: number; totalPages: number }> => ({ docs: [], totalDocs: 0, totalPages: 0 }),
  findByID: async (_args?: any): Promise<any> => null,
  create: async (_args?: any) => null,
  update: async (_args?: any) => null,
  delete: async (_args?: any) => null,
  login: async (_args?: any) => ({ user: null, token: null }),
  logout: async (_args?: any) => null,
  auth: async (_args?: any) => ({ user: null }),
};