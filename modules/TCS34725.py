from machine import Pin, I2C
import os
import struct

ADDR = 0x29

i2c = I2C(0, scl=Pin(5), sda=Pin(4), freq=100000)
i2c.writeto(ADDR, b'\x80\x03')
i2c.writeto(ADDR, b'\x81\x2b')

crgb = [ 0, 0, 0, 0 ]

def valid():
    i2c.writeto(ADDR, b'\x93')
    return i2c.readfrom(ADDR, 1)[0] & 1

def raw():
    i2c.writeto(ADDR, b'\xb4')
    return struct.unpack("<HHHH", i2c.readfrom(ADDR, 8))

def update():
    global crgb
    crgb = raw()

def light():
    return crgb[0]

def scaled():
    if crgb[0] > 0:
        return tuple(float(x) / crgb[0] for x in crgb[1:])
    return (0,0,0)

def brightness(level=65.535):
    return int((light() / level))

def rgb():
    return tuple(int(x * 255) for x in scaled())
