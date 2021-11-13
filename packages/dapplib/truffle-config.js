require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remember horn harvest creek food tennis'; 
let testAccounts = [
"0xa69df15cc7aa8e14afb471c02babb614edadc421e19839177bdc1996ddcfc67a",
"0x796d79d1a9db050e0485327507d43d751b8304c9ad224bfac51178915962c126",
"0x11a49aa6ebaebd6a2f3df93430b59900f290bb6c2d590d08dcb2817a243d0cab",
"0xfe0ef1f12d4a4ca7027be9b1919da2247373c473e9a48c81deab9de32b36242b",
"0x98570fe7aa9e857201624f924a8f7c854cc4bf7f39750b92be8a59c373b1ae79",
"0xc5042605cfae8020867b9ef97b135b60f4b4e95f11a51b41fc6e9721cb461404",
"0xc0124215e0e2a11e56dbf39d2e42c8558cd98fa55ddeff0c5a6b9e378f6e6396",
"0x989a65a3a2d1334d48852472e15e9e4ebc009a1e23ac24d3df42812b6a0f048c",
"0x53da342a217cb40d82fa4bbe692ac59e53bc4dca3891c02b95f006b3658ce852",
"0x0d275e7ee85027dda62e778f782dceee92efb71163483efc5232a6b25494e12f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


