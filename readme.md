Example of building a portal like micro-frontends for multiple react SPA's. Each react project is totally self contained and should be deployed separately.

## Run the example

1, Clone this project

2, `npm install serve -g`

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

## Portal project configuration

1, `npm install single-spa`

2, webpack dev server config: (When deploy to production, you should do the same thing)

```
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    },
    proxy: {
      "/app1": {
        target: "http://localhost:3001",
        pathRewrite: { "^/app1": "" }
      },
      "/app2": {
        target: "http://localhost:3002",
        pathRewrite: { "^/app2": "" }
      }
    }
```

3, add system.js to index.html at public folder

4, config the init of sub projects with src/helper/mfeHelper.js and src/index.js

## Sub project project-react1 and project-react2 configuration

1 `npm install single-spa-react`

2, add the below three config to webpack output:

```
    filename: 'static/js/bundle.js',
    libraryTarget: 'amd',
    library: 'reactApp'
```

3, config react route entry file singleSpaEntry.js, change the id to sub project base id ('app1' or 'app2'):

```
    import singleSpaReact from 'single-spa-react';

    const reactLifecycles = singleSpaReact({
        React,
        ReactDOM,
        rootComponent: App,
        domElementGetter,
    });

    export function bootstrap(props) {
        return reactLifecycles.bootstrap(props);
    }

    export function mount(props) {
        return reactLifecycles.mount(props);
    }

    export function unmount(props) {
        return reactLifecycles.unmount(props);
    }

    function domElementGetter() {
        // Make sure there is a div for us to render into
        let el = document.getElementById('changeIt');
        if (!el) {
            el = document.createElement('div');
            el.id = 'changeIt';
            document.body.appendChild(el);
        }

        return el;
    }
```

4, add baseName to React-router:
Example:

```
const env = process.env.NODE_ENV;
const basename = env === "production" ? "/#/app1" : "";
export const history = createBrowserHistory({ basename });
```

5, in config/paths.js, config the root file selection
example:

```
const env = process.env.NODE_ENV;
const appIndexJs = env === "production" ? "src/singleSapEntry" : "src/index";
```

6, config the public path for image resources:
example:

```
{
    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
    loader: require.resolve("url-loader"),
    options: {
        limit: 10000,
        name: "static/media/[name].[hash:8].[ext]",
        publicPath: "/app1/"
    }
}
```

## Inter-app communication

Please refer to: https://github.com/me-12/single-spa-portal-example/blob/master/README.md#inter-app-communication

## Common notice

1, All applications including the root should use hash history

2, If navigate between sub applications, please use global window object
