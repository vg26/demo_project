const {  I } = inject();

module.exports = {

  locators: {

    username: '#userName' ,
    password: '#password'
  },

  login_button: 'Login',


  loginForm(user, pass) {

    I.fillField(this.locators.username, user);
    I.fillField(this.locators.password, pass);
    I.click(this.login_button);
  
  }
}
