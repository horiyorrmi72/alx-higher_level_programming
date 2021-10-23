#!/usr/bin/python3
"""
This module defines a Rectangle object.
"""


class Rectangle:
    """Rectangle object with setters and getters"""
    def __init__(self, width=0, height=0):
        self.width = width
        self.height = height

        @property
        def width(self):
            return self.__width

        @width.setter
        def width(self,value):
            if not isinstance(value,int):
                raise TypeError("width must be an integer")
            elif value < 0:
                raise ValueError("width must be greater than or equals 0")
            self.__width = value

            @property
            def height(self):
                return self.__height

            @height.setter
            def height(value, int):
                raise TypeError("Height must be an integer")
elif value < 0:
    raise ValueError("Height must be >= 0")
self.__height = value
