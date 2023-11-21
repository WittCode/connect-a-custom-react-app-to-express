import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.cjs';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();
const PORT = 1234;

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler, {}));

app.get('/cheese', (req, res) => {
  return res.status(200).json([
    {name: 'Cheddar', description: 'Very tasty, I like it.'},
    {name: 'Mozzarella', description: 'Very tasty, Very good OMG'},
    {name: 'Fetta', description: 'Ehhh not the best, but still good'},
    {name: 'Gorgonzola', description: 'Is this how you spell it?'},
    {name: 'Cheddar', description: 'Very tasty, I like it.'},
    {name: 'Mozzarella', description: 'Very tasty, Very good OMG'},
    {name: 'Fetta', description: 'Ehhh not the best, but still good'},
    {name: 'Gorgonzola', description: 'Is this how you spell it?'},
    {name: 'Cheddar', description: 'Very tasty, I like it.'},
    {name: 'Mozzarella', description: 'Very tasty, Very good OMG'},
    {name: 'Fetta', description: 'Ehhh not the best, but still good'},
    {name: 'Gorgonzola', description: 'Is this how you spell it?'},
  ]);
});

app.listen(PORT, () => {
  console.log(`Server started listening on portsss: ${PORT}`);
});