// utils/auth.ts
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD; // In production, always use env var

export function verifyAdmin(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export function isAdminAuthenticated(): boolean {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem('isAdminAuthenticated') === 'true';
  }
  return false;
}

export function authenticateAdmin(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('isAdminAuthenticated', 'true');
  }
}

export function deauthenticateAdmin(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('isAdminAuthenticated');
  }
}