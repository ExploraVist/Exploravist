# Exploravist
Our goal is to empower the visually impaired with tools that improve their independence at a reasonable cost. Our current solution is a wearable device that with a simple tap provides a text description of their environment. Being able to read out text is a very important feature of the device that improves user independence.

We are providing this device as a low-cost alternative to the significantly higher priced market. Our current manufacturing cost lies at around $20-$30 which we are able to achieve due to our use of widely available consumer hardware in our electronics. We plan to provide similar functionality at a fraction of the cost!

Below is an early prototype:

<img src="https://github.com/KetAveryH/Exploravist/blob/main/images/device.png?raw=true"  alt="Exploravist Version 2" style="width: 50%; height: auto;">

## The Github:
Currently our first device is going through intensive testing and refinements. All the production and development code is in private repository's under the ExploraVist Organization. The code you see in this repository we keep around to remember the beginnings, however unfortunely a lot of our software has changed and 90% of this code is no longer in use. The website code is still here though because our CTO is too lazy to move it :)

## Team Organization:
Currently we have a few sub-teams with some general goals:

#### Embedded Development Team:
The Embedded Development Team works on writing code that is flashed onto the ESP32 S3 board. They are responsible for ensuring the reliability and responsiveness of device software. How the device will connect to Wi-Fi, and how it will respond to a user's tap is all determined by this team. The Embedded Software team is also responsible for integrating i2c and i2s communication with a variety of components with device software. This team is the heart of the device's functionality!

#### Device Hardware Team:
The Device Hardware Team works on the physical appearance and physical interface of the device. How do we design a light weight, easily attachable, and versatile device that is physically intuitive to use for the visually impaired. This team continues to refine the device as well as innovate new solutions for future products. The Electrical PCB Design Team is under this and is responsible for getting all of how hardware onto a PCB. This minimizes weight, size, and simplifies the construction process of putting together new devices!

#### Cloud Development Team:
The Cloud Development Team works on running a model on our cloud, handling requests to it for the users workflow, and minimize response time. In addition the team works towards unifying app and device data for a seamless experience. This team works closely with all the teams to keep our pipelines running!

#### App Development Team:
The App Development Team works on a mobile app that pairs with our device. This will enable users to configure device settings from their mobile phone, and provides the opportunity of running local ML models when WiFi access is limited. Our goal is to also launch an easy-to-use app that is revolutionary in terms of catering toward our target users. Lastly, this team works closely with the Embedded and Cloud Teams to share data from the device to the app.

#### ML Development Team:
The ML Dev Team is responsible for the research and development of both our cloud based vision models and local models that can fill in when WiFi connection is lost. These models will be lower-resolution, but will be able to do what we are looking for easily. It also is possible that with models like DeblurGAN-v2 we can reduce the blurriness of pictures taken which we hope will improve image descriptions. Due to a lean team size, many also directly work on the App Development Team.

## Check us Out!: 
https://exploravist.net/
