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

<p align="center">DHost VS Code Extension allows you to instantly publish static websites to <a href="https://ipfs.io/">IPFS</a> by using <a href="https://web3.storage/">web3.storage</a>. Now you can publish and share your websites quickly with anyone in the world!</p>

<p align="center"><img align="center" src="/images/demo.gif"></img></p>

## Steps to use

Open command palette

- Windows & Linux: `Ctrl + Shift + P`
- MacOS: `Command + Shift + P`

### 1. Submit web3.storage API key

First, generate the web3.storage API key:

- Go to [web3.storage](https://web3.storage/) and Sign In.
- Click on Accounts and select Create an API Token.
- Copy the API Token and paste it in the input field.

Now, to enter your web3.storage API token, type `dhost.token` command.

<img align="center" src="/images/token_command.png"></img>

Enter your web3.storage API token:

<img align="center" src="/images/enter_token.png"></img>

On entering the API key, the "API token saved!" popup will appear.

<img align="center" src="/images/token_saved.png"></img>

### 2. Select the folder

Select the folder of your static website by `dhost.select` command.

<img align="center" src="/images/select_command.png"></img>

After selecting folder, the "Folder selected!" popup will appear.

<img align="center" src="/images/folder_selected.png"></img>

### 3. Publish to IPFS

Now, publish your static website by `dhost.publish` command.

<img align="center" src="/images/publish_command.png"></img>

It'll take a few seconds to publish.

<img align="center" src="/images/publishing_to_ipfs.png"></img>

After publishing successfully, it'll show the IPFS `CID` of your website and an option to open the website (IPFS gateway URI).

<img align="center" src="/images/published.png"></img>

If you have any queries, then create a [discussion thread](https://github.com/p2plabsxyz/support/discussions).

## License

DHost is licensed under the [MIT License](https://github.com/p2plabsxyz/dhost/blob/main/LICENSE).

<hr>
Don't forget to leave a star ⭐️ ~ <a href="https://twitter.com/p2plabs_xyz" target="_blank"><img src="https://img.shields.io/twitter/follow/p2plabs_xyz?style=social" alt="twitter" /></a>
