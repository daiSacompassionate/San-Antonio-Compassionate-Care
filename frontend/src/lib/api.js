// Centralized API base for frontend -> backend calls
export const API_BASE = (import.meta.env.VITE_BACKEND_URL || '').trim() || 'http://localhost:5000';

export function url(path) {
  // Ensure path starts with a slash
  if (!path.startsWith('/')) path = '/' + path;
  return `${API_BASE}${path}`;
}

export default API_BASE;
