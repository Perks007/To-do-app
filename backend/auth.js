function extractBearerToken(header) {
  if (typeof header !== 'string') {
    return null;
  }

  const [scheme, token] = header.trim().split(/\s+/);

  if (scheme !== 'Bearer' || !token) {
    return null;
  }

  return token;
}

module.exports = {
  extractBearerToken,
};