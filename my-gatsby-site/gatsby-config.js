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
					token: 'i_OSVQLA95nw7Z48Rge77-jqur2PdO_A', // You can use a static token from an user

					// Or you can use the credentials of an user
					// email: 'admin@gmail.com',
					// password: '12345678',
				},
			},
		},
  ],
}
