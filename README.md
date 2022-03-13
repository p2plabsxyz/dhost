<p align="center">
    <img align="center" src="/images/logo.png" width="150" height="150"></img>
</p>

<h1 align="center">DHost</h1>

<div align="center">
    <img src="https://img.shields.io/vscode-marketplace/v/DHost.dhost.svg?style=flat-square&color=blue&label=vscode%20marketplace" alt="Version" />
    <img src="https://img.shields.io/vscode-marketplace/d/DHost.dhost.svg?style=flat-square&color=green&label=installs" alt="Installs"/>
    <img src="https://img.shields.io/vscode-marketplace/r/DHost.dhost.svg?style=flat-square&color=green&label=rating" alt="Rating"/>
    <img src="https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square" alt="License">
</div><br>

<p align="center">DHost vscode extension allows you to instantly publish static websites to <a href="https://ipfs.io/">IPFS</a> by using <a href="https://web3.storage/">web3.storage</a>. Now you can publish and share your websites quickly with anyone in the world!</p>

<p align="center"><img align="center" src="/images/demo.gif"></img></p>

## Features
* ✅ Decentralized
* ✅ Instant hosting (Publish your website with just 2 commands)
* ✅ Unlimited uploads
* ✅ Accessible to anyone
* ✅ Permanent storage (web.storage helps to permanently pin your content)
* ✅ Secure (Share IPFS links instead of IP Addresses)
* ✅ Free to use

## Steps to use
Open command palette
* Windows & Linux: `Ctrl + Shift + P`
* MacOS: `Command + Shift + P`

### 1. Select the folder
Select the folder of your static website by `dhost.select` command.

<img align="center" src="/images/select_command.png"></img>

After selecting the folder, the "Folder selected!" popup will appear.

<img align="center" src="/images/folder_selected.png"></img>

### 2. Publish to IPFS
Now, publish your static website by `dhost.publish` command.

<img align="center" src="/images/publish_command.png"></img>

It'll take a few seconds to publish.

<img align="center" src="/images/publishing_to_ipfs.png"></img>

After publishing successfully, it'll show the IPFS `CID` of your website and an option to open the website (IPFS gateway URI).

<img align="center" src="/images/published.png"></img>

## Working
DHost uses web3.storage, basically it makes the content available over IPFS and permanently pins the content with the help of [Filecoin](https://filecoin.io/) infrastructure. Read more about web3.storage and how it works [here](https://web3.storage/about/).
We have our separate DHost API Token on web3.storage, it allows up to 1TB of content pinning, after that we can request more storage for our respective use.

After uploading your website to IPFS, web3.storage returns a [CID](https://docs.ipfs.io/concepts/content-addressing/) `Qmeq5NxNX644KHNji..`, which is a hash for an array of files stored on IPFS, and that later is combined with IPFS gateway link `https://ipfs.infura.io/ipfs/` to access the content.

## License
DHost is licensed under the [MIT License](https://github.com/buidltools/vscode-dhost/blob/main/LICENSE).

<hr>
Don't forget to leave a star ⭐️ ~ <a href="https://twitter.com/buidltools" target="_blank"><img src="https://img.shields.io/twitter/follow/buidltools?style=social" alt="twitter" /></a>
