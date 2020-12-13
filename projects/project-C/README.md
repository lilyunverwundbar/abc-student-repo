# Welcome to the Lantern World
![Animated Cover](projectC.gif)<br>
In this project, I created a space at night where everyone is represented as a lantern. The user will appear on the page when he/she clicks on the "create lantern" button.

## Description

After the you created your own lantern on the page, you can click on it to make it get brighter and brighter. After certain clicks, your lantern's brightness will come down to zero again. It works just like your lamp but in a virtual space. Meanwhile, you can see other joined users' lanterns and how they change the brightness.

## Quick Start

You can join this lantern world by clicking [here](https://deep-typhoon-monday.glitch.me)


## Reflection

I gained a lot experience on how to pass data to the server and emit it to other clients. In order to show the previous lanterns on the page of a newly joined user, I kept an array of data of all the lanterns to render on the page which is like a little database. One thing I didn't manage to do correctly was the updated brightness of each lantern. The method I am using now covers the previous image over and over again if the brightness is ever updated, hence resulting in the brightness of that lantern higher on other users' pages.
I also got feedback from people that the "create lantern" button let them want to create more than one lantern. I updated the website to inform people that they can only be shown as one single lantern on the page.
