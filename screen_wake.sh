#!/bin/bash

sleep 1
echo 0 | sudo tee /sys/class/backlight/rpi_backlight/bl_power
