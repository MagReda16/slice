const logout = () => {
  localStorage.removeItem('accessToken');
}

export { logout };