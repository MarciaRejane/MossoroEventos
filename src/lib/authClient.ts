export function setToken(token: string) {
  document.cookie = `token=${token}; path=/`;
}

export function removeToken() {
  document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}
