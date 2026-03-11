## Spider Web
###### made by Dynasty
#### The World'd First Platform that connects Freelancers

### Technologies Used 
* _Nodejs_
* _Javascript_
* _MongoDB_
* _Nodemailer_
* _CookieParser_
* _bcryptjs_

### Description
_The Backend Application for Spider-Web that contains a full-fledged authentication and authorization system. Users have the ability to reset password after they have forgotten password, Users have the ability to verify their account. There is also the pagination feature_

## Project Structure
```sh
/auth-project
├── /controllers
│       ├── /authController.js
│       ├── /platformsController.js
├── /middlewares
│       ├── /identification.js
│       ├── /sendMail.js
│       ├── /validator.js
├── /models
│       ├── /platformsModel.js
│       ├── /usersModel.js
├── /routers
│       ├── /authRouter.js
│       ├── /platformsRouter.js
├── /utils
│       ├── /hashing.js
├── .env.example
├── .gitignore
├── auth-project.rest
├── index.js
├── package.json
├── package-lock.json
├── /README.md

```

## Getting Started
1. Clone the Repository
```sh
git clone https://github.com/Emzzy241/auth-project.git
cd auth-project
```

2. Environment Configuration
Create a .env file in the root with the following variables.
```sh
PORT=8000
MONGO_URL=MONGO_DB_URL
TOKEN_SECRET=A_TOKEN_SECRET_FOR_JWT
NODE_CODE_SENDING_EMAIL_ADDRESS=EMAIL_YOU_WANT_TO_SEND_CODE_FROM@gmail.com
NODE_CODE_SENDING_EMAIL_PASSWORD=YOUR_APP_PASSWORD_FROM_GOOGLE
HMAC_VERIFICATION_CODE_SECRET=SECRET_FOR_YOUR_HMAC_VERIFICATION


or rename the .env.example file to .env, and
Add your JWT keys and database credentials

```
## 🔐 Authentication
Uses jsonwebtoken and bcryptjs to implement secure authentication flows for users.

## Scripts 

| Script     | Description
|------------|-------------------------------------|
| npm start  | Starts the server with live reload  |
| npm dev    | Runs app in dev environment         |

### Known Bugs
_No known bugs_

### Author
Emmanuel Mojiboye (Dynasty)

### License
Licensed under the ISC License.