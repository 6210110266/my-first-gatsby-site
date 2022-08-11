module.exports = {
  // siteMetadata: {
  //   siteUrl: `https://www.yourdomain.tld`,
  // },
  plugins: [
    {
			resolve: '@directus/gatsby-source-directus',
			options: {
				url: `http://127.0.0.1:8055`, // Fill with your Directus instance address
				auth: {
					// token: 'my_secret_token', // You can use a static token from an user

					// Or you can use the credentials of an user
					email: 'admin@gmail.com',
					password: '12345678',
				},
			},
		},
  ],
}
