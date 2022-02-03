module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b00e5ab4d386a59a56fc5f29ac454f3d'),
  },
});
