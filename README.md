# redux-saga-autocomplete-example

An example app using redux-saga and react-autosuggest.

The app is consist of two sub apps: server and client.
A server, which implemented with `koa`, provides API for suggestion.

## Get Started

Please grab the code from github repository and install dependencies.

```
git clone https://github.com/kuy/redux-saga-autocomplete-example.git
cd redux-saga-autocomplete-example
npm install
```

### Start server

```
npm run server
```

### Start client (webpack-dev-server)

```
npm run client
```

>Notice:
This example assume you to run on *bare metal*, which means not on virtual machines
like VMware, Virtualbox, etc. If a request doesn't reach to the server,
please try to rewrite `localhost` to your IP or hostname in server code.

## License

MIT

## Author

Yuki Kodama / [@kuy](https://twitter.com/kuy)
