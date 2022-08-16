module.exports = {
  // siteMetadata: {
  //   siteUrl: `https://www.yourdomain.tld`,
  // },
  plugins: [
    {
			resolve: '@directus/gatsby-source-directus',
			options: {
				url: `https://opxeubxg.directus.app/`, // Fill with your Directus instance address
				auth: {
					token: 'cFpYqXhFtKeVPtBHCYmkCe4mfZVS1Lhw', // You can use a static token from an user

					// Or you can use the credentials of an user
					// email: 'admin@gmail.com',
					// password: '12345678',
				},
			},
		},
  ],
}
