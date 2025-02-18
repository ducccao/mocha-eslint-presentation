const express = require('express');
const userCtrl = require('../controllers/users.controller');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.post(
  '/login',
  /* #swagger.parameters['loginUser'] = {
       in: 'body',
       description: 'Info for logging in.',
       required: true,
       schema: {
        $username: "an@gmail.com",
        $password: "123456"
       }
} */
  userCtrl.login
);

router.post(
  '/register',
  /* #swagger.parameters['newUser'] = {
     in: 'body',
     description: 'Info for registering new account.',
     required: true,
     schema: {
      $username: "an@gmail.com",
      $password: "123456",
      $isNormalFlow: true
     }
} */
  userCtrl.register
);

router.post(
  '/activate',
  /* #swagger.parameters['newUser'] = {
     in: 'body',
     description: 'Info for activating new account.',
     required: true,
     schema: {
      $email: "an@gmail.com",
      $otp: 123456
     }
} */
  userCtrl.activate
);

router.post(
  '/forget-password',
  /* #swagger.parameters['resetUser'] = {
   in: 'body',
   description: 'Info for resetting account password.',
   required: true,
   schema: {
    $email: "an@gmail.com",
   }
} */
  userCtrl.forgetPassword
);

router.post(
  '/reset-password',
  /* #swagger.parameters['resetUser'] = {
   in: 'body',
   description: 'Info for resetting account password.',
   required: true,
   schema: {
    $otp: 123456,
    $email: "an@gmail.com",
    $password: "an@gmail.com",
    $confirmPassword: "an@gmail.com",
   }
} */
  userCtrl.resetPassword
);

router.get('/authenticated', userCtrl.authenticated);

router.get(
  '/info',
  /*
   #swagger.parameters['loginUser'] = {
      in: 'header',
      description: 'Token From Login.',
      required: true,
      name: 'access_token',
      value : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJIdW5nS2hhQW5LaWV0VHVhbiIsInN1YiI6IjYwNjlkOWM4YjVjYzZlMDAyMGZiMGJjZSIsImlhdCI6MTYxODE1MzMzNCwiZXhwIjoyODI3NzUzMzM0fQ.5_nY8cUEwKq1zg5vW3g7yIrZ97_rxd-KbgVvI_L3jFQ'
  },
*/
  userCtrl.getUserInfo
);

router.post(
  '/update-info',
  /*
     #swagger.parameters['loginUser'] = {
        in: 'header',
        description: 'Token From Login.',
        required: true,
        name: 'access_token',
        value : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJIdW5nS2hhQW5LaWV0VHVhbiIsInN1YiI6IjYwNjlkOWM4YjVjYzZlMDAyMGZiMGJjZSIsImlhdCI6MTYxODE1MzMzNCwiZXhwIjoyODI3NzUzMzM0fQ.5_nY8cUEwKq1zg5vW3g7yIrZ97_rxd-KbgVvI_L3jFQ'
    },
    #swagger.parameters['userInfo'] = {
        in: 'body',
        description: 'User Information.',
        required: true,
        id: 'userInfo',
        schema: {
        user: {
                $fullName: "Nguyễn Hoàng Thiên Ân",
                $description: "HCMUS Boi",
              }
        }
    }
} */
  userCtrl.updateUserInfo
);

router.post(
  '/change-password',
  /*
       #swagger.parameters['loginUser'] = {
          in: 'header',
          description: 'Token From Login.',
          required: true,
          name: 'access_token',
          value : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJIdW5nS2hhQW5LaWV0VHVhbiIsInN1YiI6IjYwNjlkOWM4YjVjYzZlMDAyMGZiMGJjZSIsImlhdCI6MTYxODE1MzMzNCwiZXhwIjoyODI3NzUzMzM0fQ.5_nY8cUEwKq1zg5vW3g7yIrZ97_rxd-KbgVvI_L3jFQ'
      },
      #swagger.parameters['userInfo'] = {
          in: 'body',
          description: 'User Information.',
          required: true,
          id: 'userInfo',
          schema: {
            $currentPassword: "123456",
            $newPassword: "654321",
          }
      }
  } */
  userCtrl.changePassword
);

router.patch('/change-name', userCtrl.changeNameController);

module.exports = router;
