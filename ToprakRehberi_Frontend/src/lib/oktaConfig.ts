export const oktaConfig = {
        clientId:'0oain5vuukXqz7pMA5d7',
        issuer:'https://dev-82251993.okta.com/oauth2/default',
        redirectUri:'http://localhost:3005/login/callback',
        scopes:['openid','profile','email'],
        pkce:true,
        disableHTTPSCheck:true,
}