#!/usr/bin/python
# Abandoned experiment, kept for reference: talking to the keyboard over raw HID
# instead of serial. It's adapted from the example below and doesn't fully work.
#
# Module:   hid_test.py
# Author:   Wade Hampton
# Date:     n/a
# Notes:
# 1)  This requires the hidapi module and the hid lib to be loaded.
#     - load hid module, tested on Ubuntu:
#         apt-get install install libhidapi-libusb0
#         [includes keyboard support]
#         [alt is libhidapi-hidraw0 for raw devices]
#     - get the Python module:  https://pypi.python.org/pypi/hid/0.1.1
#     - extract and install the python module
#         tar xvzf hid-0.1.1.tar.gz
#     - install (root)
#         cd hid-0.1.1
#         python setup.py install
# 2)  Plug in a HID USB device and run this program
#     - if device is raw, you might be able to open by path
#     - use vid/pid for non-raw devices (works for keyboards)
# 3)  This may need to be run as root unless you change the
#     permissions on the HID device....
#

import hid
import json

# get list of HID devices connected to this computer
h = hid.enumerate()
print("HID info=", json.dumps(
    [
        { k: str(v) for k, v in device.items() }
        for device in h
        if "crkbd" in device["product_string"]
    ], indent=4))

# get path of first item
item = 0
path = h[item]["path"]
vid = h[item]["vendor_id"]
pid = h[item]["product_id"]

print(f"Path={path} Vid={vid} Pid={pid}")

# open the device
try:

    # using path works on raw, not non-raw
    d=hid.Device(path=path)
    print("Opened device=", path)

    # device = hid.Device(vid=vid, pid=pid)
    # print("Opened device=", vid, pid)

    device.write("hello")

    device.read(5)

    device.close()


    # -- TBD
    # r=d.get_feature_report(1, 1024)
    # print("Report=", r)

    # loop rading the keyboard....
    # done = 0
    # while done == 0:
    #     r = d.read(10)
    #     for c in r:
    #         x = ord(c)
    #         print("read=", x)
    

except Exception as e:
    print("Exception, e=", e)

print("Done!")
