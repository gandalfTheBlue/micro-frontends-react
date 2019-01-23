Example of building a portal like micro-frontends for multiple react SPA's. Each react project is totally self contained and should be deployed separately.

## Run the example

1, Clone this project

2, npm install serve -g

3, Go to each app folder and do:

- `npm install`

4, Under portal-project

- `npm start`

5, Under project-react1

- `npm run build`
- `serve -s build -p 5000`

6, Under project-react2

- `npm run build`
- `serve -s build -p 5001`

7, Open up http://localhost:3000 in a web browser.
