# typescript-sample-project-with-azure-devops-ci-cd
TypeScript Sample project with Azure DevOps CI/CD

- COnfigure TypeScript:

npm install typescript --save-dev

- Configure Jest:

npm install --save-dev ts-jest

npm install --save-dev @types/jest

npx ts-jest config:init

Add to jest.config.js file:

```
    moduleNameMapper: {
        "^/opt/nodejs/(.*)": "./src/layers/(.*)",
    },
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
```

- Configure ESLint:

npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser

npm init @eslint/config

Select option related to Javascript.

Add to .eslintrc.json:

```
    "rules": {
        "no-undef": "off"
    }
```

- Configure Prettier:

npm install --save-dev prettier

