# Global Social

Global Social is a decentralized social protocol that leverages Cartesi's powerful computational capabilities to make social data transparent and resistant to censorship.

![](https://i.imgur.com/FxXvKP2.png)

# Why Global Social & Cartesi?

This is a Social Protocol built on Cartesi, leveraging Cartesi's RISC-V architecture to store large social posts and updates. More importantly, Cartesi's powerful computational capabilities make decentralized social algorithms possible. People can review publicly transparent algorithms and verify the correctness of their data.

# How Global Social work?

In Global Social, the frontend can use the `inspect` API to search for matching posts. Thanks to Cartesi's powerful computational capabilities, the response speed is comparable to Web2, with storage capacity and query performance also on par. This provides users with a modern, high-throughput application experience. In future development, more complex algorithms can be introduced, allowing users to freely choose suitable algorithms and ensuring a decentralized and transparent social experience.

In this project, the `advance` API is used to update post data. Users can click 'like,' and these likes will influence the algorithm's recommendations.

# Getting started

1. build

```sh
cartesi build
```

2. run

```sh
cartesi run
```

3. send request

abi data

```sh
functionName: "createPost",
args: ["0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC", "I hate coding"],
```

encode data `0xfe7ec5a5000000000000000000000000a5cc3c03994db5b0d9a5eedd10cabab0813678ac0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000d49204c696b6520636f64696e6700000000000000000000000000000000000000`

send cmd

```sh
cartesi send generic
✔ Chain Foundry
✔ RPC URL http://127.0.0.1:8545
✔ Wallet Mnemonic
✔ Mnemonic test test test test test test test test test test test junk
✔ Account 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 9993.476291596530017783 ETH
✔ Application address 0xab7528bb862fB57E8A2BCd567a2e929a0Be56a5e
✔ Input Hex string encoding
✔ Input (as hex-string) 0xfe7ec5a5000000000000000000000000a5cc3c03994db5b0d9a5eedd10cabab0813678ac000000000000000000000000
0000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000d49204c696b6520636f
64696e6700000000000000000000000000000000000000
✔ Input sent: 0x3d53aa6871916defe75eca83f97239b585c14ac026f586f1e6d5555aaaea73fc
```

4. query posts

```sh
curl http://localhost:8080/inspect/getAllPosts
```

output

```sh
{"status":"Accepted","exception_payload":null,"reports":[{"payload":"0x5b7b226964223a322c2263726561746f72223a22307861356363336330333939344442356230643941356545644431304361626142303831333637384143222c22636f6e74656e74223a2249206861746520636f64696e67222c226c696b6573223a327d2c7b226964223a312c2263726561746f72223a22307861356363336330333939344442356230643941356545644431304361626142303831333637384143222c22636f6e74656e74223a2249204c696b6520636f64696e67222c226c696b6573223a317d5d"}],"processed_input_count":5}
```

The data is payload field, you can convert that to string
Look like:

```sh
[{"id":2,"creator":"0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC","content":"I hate coding","likes":2},{"id":1,"creator":"0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC","content":"I Like coding","likes":1}]
```
