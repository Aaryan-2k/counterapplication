import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //setting up provider so that the centeral redux store is accessible from all the compoenents
<Provider store={store}>
  <App/>
</Provider>
);


