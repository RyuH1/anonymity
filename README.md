# Anonymous Democracy Voting with Automata Geode
## Introduction
This project implements the means necessary to allow a user to anonymously vote in Democracy Referenda. With our solution, a user delegates the Geode, a TEE empowered by Intel SGX, to vote on their behalf. The user then privately submits their vote to the Geode, and the Geode votes in the referendum according to the votes received from the users who delegated it.
## Submissions
### Democracy Pallets with Demo chain
The vote submitted by Geode is a Mixed vote, a vote type we introduce in the chain to allow the Geode to have votes for both sides of the proposal. We added the necessary logic to handle this type of vote in ./chain. And it has been integrated into a demo chain built from Substrate Node Template

Here is a [diff](<https://github.com/paritytech/substrate/compare/monthly-2021-11-1...automata-network:polkadot-hackathon>) of the modified Democracy Pallet from the original one for a quick glimpse. 

### Frontend Application
The code for the front-end providing the interface for voting through the Geode is in ./front-end. It's built on top of the current project [Polkadot Assembly](https://github.com/Premiurly/polkassembly)

### Geode Design Document
The Geode code runs entirely in an Intel SGX enclave, ensuring that the voting preferences of users are not leaked. Users call the “submit_vote” RPC method and inform Geode of their voting option for a particular referendum (a vote will be accepted only if the sender delegated Geode in advance). For each referendum, Geode sets a deadline a couple of blocks before the referendum ends (for now, the deadline is set to 10 blocks before the referendum ends.) When the deadline is met, Geode stops accepting voting options and starts counting the votes for that particular referendum. If a user delegates the Geode but doesn’t vote, the Geode counts the vote as half approve and half disapprove. Once counting is done, Geode builds a Mixed vote and submits it to the chain. More information regarding the internal doing of Geode can be found in [Geode Design Document](./GEODE_DESIGN.md).

## Install
Instructions on how to run the chain and front-end code are in their respective folders.

## Deployments

### Demo Chain
#### Endpoints
| Name | Value |
| -- | -- |
| Dashboard | [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fhackathon-api.ata.network#/explorer) |
| HTTP RPC Endpoint | https://hackathon-rpc.ata.network |
| Websockets RPC Endpoint | wss://hackathon-api.ata.network |
#### Run as full node
##### Install Dependencies
- Install Docker
- Please go to this [link](https://docs.docker.com/get-docker/) to download the docker engine for your Operating System accordingly.
##### Run the docker image
```bash
docker run -it -d -p 30333:30333 -p 9933:9933 -p 9944:9944 ryuh1/anonymity:v0.1.1 --base-path /chain-data --chain local --port 30333 --ws-port 9944 --rpc-port 9933 --bootnodes /ip4/20.99.225.95/tcp/30335/p2p/12D3KooWEyoppNCUx8Yx66oV9fJnriXwCcXwDDUA2kj6vnc6iDEp
```

### Frontend
<https://automata-network.github.io/polkadot-hackathon/>

## Future Work:
1. Currently, the Geode pays the fee for submitting the vote extrinsic. In the future, we could deduct part of this fee from the locked balance of all the accounts that delegated the Geode. We could also deduct a fee for Geode maintenance.
2. Because we want to maintain the privacy of voting, we are unable to store the voting data outside the enclave, i.e., we cannot back it up. To enable backup, we could run a secondary Geode synchronized with the primary Geode. Communications between the two would only be decrypted inside the Intel SGX enclave to ensure privacy.
3. While users’ votes are not public anymore, the delegations are, and votes can be deducted based on what Geode votes at the end. To increase the chances of having voting options anonymous, the frond-end could display suggestions for choosing balance and conviction values that are most likely to hide the preference of the user. 
