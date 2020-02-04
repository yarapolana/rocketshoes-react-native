<p align="center">
  <img align="center" src="https://res.cloudinary.com/yarapolana/image/upload/v1580825601/desafio-7-rocketshoes/logo_hpwo4x.svg" width="500" />
</p>

<h1 align="center">👠 React Native + Redux Challenge</h1>
<p>This is a ecommerce mobile application for iOS & Android, and a code challenge from a class in Rocketseat's Bootcamp. The challenge involves implementing flux architecture to a react native project from scratch. <a href="#description" >Read Description</a></p>

<p align="center">
  <img src="https://img.shields.io/github/package-json/dependency-version/yarapolana/rocketshoes-react-native/react-native.svg" >
  <img src="https://img.shields.io/github/package-json/dependency-version/yarapolana/rocketshoes-react-native/react-navigation.svg" >
  <img src="https://img.shields.io/github/license/yarapolana/rocketshoes-react-native.svg" >
  <a href="https://yarapolana.com"><img src="https://img.shields.io/badge/createdby-yarapolana-red.svg" ></a>
</p>

<img src="https://res.cloudinary.com/yarapolana/image/upload/v1580842964/desafio-7-rocketshoes/home-mobile_xnap8p.jpg" >

<h2>🚀Description </h2>
<p id="description">
  Build a React Native project from scratch and implement flux architecture using <a href="https://github.com/reduxjs/redux"> Redux</a>, <a href="https://github.com/redux-saga/redux-saga">Redux-Saga</a>, and debug with <a href="https://github.com/infinitered/reactotron-react-native">Reactotron-react-native</a>.
  Use Json Server as your API.
</p>

<h2>Usage</h2>
<p>To run the application first install dependencies</p>

```
yarn or npm install
```

<p>This application uses Json Server so make sure to have that running</p>

```
json-server --watch server.json

```

<p>Your server should be up and running here</p>

```
http://localhost:3000
```

<p>Then run the application</p>

```
react-native run-ios or react-native run-android
```


<h2>Routes</h2>

<i>Products</i>
- `GET /products`: This route displays an array of all products.

- `GET /products/:id`: This route uses `id` as a parameter and displays a single product.


<i>Stock</i>
- `GET /stock`: This route displays all the stock available from each product.

- `GET /stock/:id`: This route uses `id` as a parameter and this is where you see stock for a specific product.


---

<h4> Check out the react version of this challenge <a href="https://github.com/yarapolana/rocketshoes-react">here</a>.</h4>

---
### License:

This project is made available under the [MIT LICENSE](LICENSE.md).

### Authors:

<p>
  <a href="https://github.com/yarapolana">
    <img src="https://avatars0.githubusercontent.com/u/19730118?s=460&v=4" width="50" height="50">
  </a>
  <a href="https://dotcode.is">
    <img src="https://dotcode.is/images/logo_dark.svg" width="50" height="50">
  </a>
</p>
