var fs = require("fs");
const Benchmark = require('benchmark');

function include(filePath) {
    const c = fs.readFileSync(filePath);
    return ()=>{ with (global) { eval(c+''); } };
};

const cube3D = include('./sunspider/3d-cube.js');
const morph3D = include('./sunspider/3d-morph.js');
const raytrace3d = include('./sunspider/3d-raytrace.js');
const accessBinaryTrees = include('./sunspider/access-binary-trees.js');
const accessFannkuch = include('./sunspider/access-fannkuch.js');
const accessNBody = include('./sunspider/access-nbody.js');
const accessNSieve = include('./sunspider/access-nsieve.js');
const bitops3BitBitsInByte = include('./sunspider/bitops-3bit-bits-in-byte.js');
const bitopsBitsInByte = include('./sunspider/bitops-bits-in-byte.js');
const bitopsBitwiseAnd = include('./sunspider/bitops-bitwise-and.js');
const bitopsNSieveBits = include('./sunspider/bitops-nsieve-bits.js');
const controlFlowRecursive = include('./sunspider/controlflow-recursive.js');
const cryptoAES = include('./sunspider/crypto-aes.js');
const cryptoMD5 = include('./sunspider/crypto-md5.js');
const cryptoSHA1 = include('./sunspider/crypto-sha1.js');
const dateFormatToFTE = include('./sunspider/date-format-tofte.js');
const dateFormatXParb = include('./sunspider/date-format-xparb.js');
const mathCordic = include('./sunspider/math-cordic.js');
const mathPartialSums = include('./sunspider/math-partial-sums.js');
const mathSpectralNorm = include('./sunspider/math-spectral-norm.js');
const regexpDNA = include('./sunspider/regexp-dna.js');
const stringBase64 = include('./sunspider/string-base64.js');
const stringFasta = include('./sunspider/string-fasta.js');
const stringTagCloud = include('./sunspider/string-tagcloud.js');
const stringUnpackCode = include('./sunspider/string-unpack-code.js');
const stringValidateInput = include('./sunspider/string-validate-input.js');

// or
// require('node-import'); almost the same but add more then 260 modules

var suite = new Benchmark.Suite;
 
// add tests
suite.add('cube3D', function() { cube3D(); })
.add('morph3D', function() { morph3D(); })
.add('RegExpDNA', function() { regexpDNA(); })
.add('StringBase64', function() { stringBase64(); })
.add('stringFasta', function() { stringFasta(); })
.add('stringTagCloud', function() { stringTagCloud(); })
.add('cryptoAES', function() { cryptoAES(); })
.add('cryptoMD5', function() { cryptoMD5(); })
.add('cryptoSHA1', function() { cryptoSHA1(); })

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run();//{ 'async': true });

