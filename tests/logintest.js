Feature('login');

    Scenario('test something', ({ I, login_pagePage }) => {
    
        I.amOnPage('/login');
        I.see('Login');
        login_pagePage.loginForm('vladgul','Vladgul1!');
        I.see('Profile');
    
    });
    
    Scenario('login with invalid credentials', ({ I, login_pagePage }) => {
    
        I.amOnPage('/login');
        I.see('Login');
        login_pagePage.loginForm('vladgul','Vladgul1');
        I.see('Invalid username or password!');
    
    });
    


