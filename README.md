# locustjs-htmlencode
This library provides htmlencode/htmldecode functions.

# Install
```
npm i @locustjs/htmlencode
```

# Import

CommonJs
```javascript
var { htmlEncode } = require('@locustjs/htmlencode');
```

ES6
```javascript
import { htmlEncode } from '@locustjs/htmlencode'
```

# Usage

Example 1: htmlEncode
```javascript
import { htmlEncode } from '@locustjs/htmlencode'

const str = '<p>Plan & Business = $</p>';

console.log(htmlEncode(str));  // &lt;p&gt;Plan &amp; Business &equals; &dollar;&lt;&sol;p&gt;
```

Example 2: htmlEncode + custom ignore character list
```javascript
import { htmlEncode } from '@locustjs/htmlencode'

const str = '<p>Plan & Business = $</p>';

console.log(htmlEncode(str, ['/', '=', '$']));  // &lt;p&gt;Plan &amp; Business = $&lt;/p&gt;
```

Example 3: htmlDecode
```javascript
import { htmlDecode } from '@locustjs/htmlencode'

const str = '&lt;p&gt;Plan &amp; Business&lt;&sol;p&gt;';

console.log(htmlDecode(str));  // <p>Plan & Business</p>
```
