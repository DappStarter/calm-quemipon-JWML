require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot blanket razor remember come hunt immense army gesture'; 
let testAccounts = [
"0x02d2a10a6bc7bc18fd5e0e7017548eb225f4470342a8b70c1709be7175cb358b",
"0x8ced1bff1c360e922585cfe285fa1dcab564d4eebe211d554e033e3bd7b68ab2",
"0xc5226a4a82b81c1fc52a46e48e1dee750f4e9a550ee8e64c13ec0523f352df18",
"0xe769f9c11cae14c3a8032023d67ce0720115fb4e80ec6196ba035ba6539f14b6",
"0x8ffc4b4d1dcf7e5f654a7f68c6d8a4c5e77c8fcb1f6f412631798879edc6bdff",
"0xc9a20c64a5da1cd0b7c7eaf12e8a9aaa93d79822a03c70c31b103a44fc5964a4",
"0x8c2bc8463ef236ef85b56a2286ae5e756eb4f42327b2edf146a768b88f5382d4",
"0xcc610d9a7ba9336f8e06afb6f4b1ccd99538e292e1cc3836957dc72407d65652",
"0xe986925bb51c28a487602378ed59192f17c896621726e54f2c990ee8d9e99172",
"0xcdc44194450e7c07d9ba184306ca2316b8d52141ccdc0ce072f22fcb99868a5c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

