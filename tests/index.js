import {
  htmlEncode,
  htmlDecode
} from "../index.esm.js";
import TestRunner from "@locustjs/test";

const tests = [
  [
    "htmlEncode",
    function (expect) {
      const x = htmlEncode('<p>Plan & Business</p>');

      expect(x).toBeDefined();
      expect(x).toBe('&lt;p&gt;Plan &amp; Business&lt;&sol;p&gt;');
    },
  ],
  [
    "htmlEncode (ignoreList)",
    function (expect) {
      const x = htmlEncode('<p>Plan & Business = $</p>', ['/', '=', '$']);

      expect(x).toBeDefined();
      expect(x).toBe('&lt;p&gt;Plan &amp; Business = $&lt;/p&gt;');
    },
  ]
];

const runner = new TestRunner();

runner.run(tests).then(result => {
  runner.report(result.failed > 0);
});
