## Root project configuration

1, `npm install single-spa`

2, webpack dev server config:

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
// TODO try to use npm or yarn to add system.js

4, config the init of sub projects with src/helper/mfeHelper.js and src/index.js

## Sub project configuration

1 `npm install single-spa-react`

2, add the below three config to webpack output:

```
    filename: 'static/js/bundle.js',
    libraryTarget: 'amd',
    library: 'reactApp'
```

3, config react route entry file indexMfe.js, change the id to sub project base id:

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
const appIndexJs = env === "production" ? "src/indexMfe" : "src/index";
```

6, config the publc path for image resources:
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

## Common notice

1, All applications including the root should use hash history

2, If navigate between sub applications, please use global window object
