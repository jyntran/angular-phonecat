#!/bin/bash

# Starts the Selenium server with the appropriate Chromedriver

DISPLAY=:1 xvfb-run -a java -jar node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar -Dwebdriver.chrome.driver=node_modules/protractor/selenium/chromedriver
