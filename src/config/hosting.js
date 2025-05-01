// Hosting Configuration
export const hostingConfig = {
  domain: 'instamart.infy.uk',
  ftp: {
    username: process.env.FTP_USERNAME || 'default_username',
    password: process.env.FTP_PASSWORD || 'rxntifl49mt8tq3'
  },
  mysql: {
    username: process.env.MYSQL_USERNAME || 'default_username',
    password: process.env.MYSQL_PASSWORD || 'rxntifl49mt8tq3'
  },
  emailConsent: true
};