# Kill Me Now

KMN is a simple node project that serves a webpage with a kill switch. This is meant to be used when testing mesos, marathon, kubernetes or other scheduling engines to rapidly generate faults and verify recovery. To help with diagnostics, the hostname and uptime along with a random session image are displayed.

KMN depends on node, express, and docker.

## Installation

If running as a stand-alone node app:
    `$ cd killmenow`
    `$ npm install`
    `$ bin/www`
The app is now running on port 3000. An alternate port can be specified via the `PORT` environment variable:
    `$ PORT=5000 bin/www`

To build a docker image:
    `$ sudo docker build -t <username>/killmenow .`

To run the image:
    `$ sudo docker run -p <open port>:3000 -d <username>/killmenow`

