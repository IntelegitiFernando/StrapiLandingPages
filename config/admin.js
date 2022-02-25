module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eda9fd295fe44b1895da67ba5c2d2a91'),
  },
});
