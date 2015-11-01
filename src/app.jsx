/**
 * Created by dinhquangtrung on 11/1/15.
 */

import './index.html';
import './containers/App.jsx';
import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(<App />, document.getElementById('app'));
