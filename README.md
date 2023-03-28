
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url] 



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://sauanla.com/wp-content/uploads/2020/06/ico-logo-sauanla2-300x245.png">
    <img src="https://sauanla.com/wp-content/uploads/2020/06/ico-logo-sauanla2-300x245.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Wedding Invitation Template</h3>

  <p align="center">
    This is the template for wedding invitation card!
    <br />
    <a href="https://github.com/sauanla/wedding-invitation/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://sal-wedding-invitation.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/sauanla/wedding-invitation/issues">Report Bug</a>
    ·
    <a href="https://github.com/sauanla/wedding-invitation/issues">Request Feature</a>
    ·
    <a href="https://www.youtube.com/playlist?list=PLftwn3qtQFO2BTKQnC4cK60ibvydPBNh6">Youtube Tutorial</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li> 
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
[![Product Name Screen Shot][product-screenshot]](https://sal-wedding-invitation.herokuapp.com/)

This is template wedding invation card  using nodeJs and mongodb. You can create a card and send this link for recevier.
The recevier using link invite for view infomation of marriage ceremony.

Flow:
* Go to admin manager page and create a card with receiver's information.
* Get link from system.
* Send to the recipient :smile:

You can easily edit the information and deploy it simply. All information and installation instructions will be detailed.

Thank you for your visit and we look forward to hearing from you!

### Built With

**Server**
* [NodeJS](https://nodejs.org)
* [Express](https://expressjs.com)
* [MongoDB](https://www.mongodb.com)

**Client**
* [EJS](https://ejs.co)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)



<!-- GETTING STARTED -->
## Getting Started

I have apply EJS to an Express application, include repeatable parts of your site, and pass data to the views.

### Prerequisites

You need setup prerequisites: 
*   [NodeJS - v14.17](https://nodejs.org/dist/v14.17.0/node-v14.17.0-x64.msi)
*   [Visual studio code](https://code.visualstudio.com/)

* npm
  ```sh
  npm install npm@latest -g
  ```
* nodemon
  ```sh
  npm i nodemon -g
  ```
  
### Installation

1. Get connection of MongoDB at [https://www.mongodb.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/sauanla/wedding-invitation.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Rename and edit file in `Exemple.env` to `.env`

   ```env
   PORT = 3001
   URI_MONGO = 'URI'
   DOMAIN = 'http://localhost:3001'
   SITE_KEY = 'SITE_KEY'
   SECRET_KEY = 'SECRET_KEY'
   ```
5. Start server
    for dev using nodemon
   ```sh
   npm run dev
   ```


<!-- USAGE EXAMPLES -->
## Usage
Run Seed Database: [http://localhost:3001/setup](http://localhost:3001/setup) 

_For more examples, please refer to the [Documentation](https://github.com/sauanla/wedding-invitation/wiki)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/sauanla/wedding-invitation/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Dinh Phuc - [@facbook](https://fb.com/it.sauanla) - phucnd.zit@gmail.com

Project Link: [https://github.com/sauanla/wedding-invitation](https://github.com/sauanla/wedding-invitation)



<!-- Donate -->
## Donate
<a href="https://www.buymeacoffee.com/sauanla" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/sauanla/wedding-invitation.svg?style=for-the-badge
[contributors-url]: https://github.com/sauanla/wedding-invitation/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/sauanla/wedding-invitation.svg?style=for-the-badge
[forks-url]: https://github.com/sauanla/wedding-invitation/network/members
[stars-shield]: https://img.shields.io/github/stars/sauanla/wedding-invitation.svg?style=for-the-badge
[stars-url]: https://github.com/sauanla/wedding-invitation/stargazers
[issues-shield]: https://img.shields.io/github/issues/sauanla/wedding-invitation.svg?style=for-the-badge
[issues-url]: https://github.comsauanla/wedding-invitation/issues
[license-shield]: https://img.shields.io/github/license/sauanla/wedding-invitation.svg?style=for-the-badge
[license-url]: https://github.com/sauanla/wedding-invitation/blob/main/LICENSE.txt
[product-screenshot]: https://i.imgur.com/R8MzjsI.png

⚡ Quote: 
**You fail because you don't believe.**

Yoda