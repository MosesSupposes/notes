var Application = require('spectron').Application;
var assert = require('assert');
import { expect } from 'chai';

var filename = 'CryptWiki-darwin-x64/CryptWiki.app/Contents/MacOS/CryptWiki'
if (process.platform === 'linux'){
  filename = 'CryptWiki-linux-x64/CryptWiki';
}

describe('application launch', function () {
  this.timeout(10000);

  beforeEach(function () {
    this.app = new Application({
      path: __dirname + '/../' + filename
    });
    return this.app.start();
  });

  afterEach(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  // it('shows an initial window', function () {
  //   return this.app.client.getWindowCount().then(function (count) {
  //     expect(count).to.equal(1);
  //   })
  //   .then(() => {
  //     return this.app.client.getTitle();
  //   })
  //   .then((title) => {
  //     expect(title).to.equal('CryptWiki');
  //   });
  //
  // });

});