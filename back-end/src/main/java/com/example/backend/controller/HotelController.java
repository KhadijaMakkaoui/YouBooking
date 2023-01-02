package com.example.backend.controller;

import com.example.backend.service.Implementation.HotelServiceImp;
import com.example.backend.service.Interface.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/hotels")
public class HotelController {
    HotelServiceImp hotelServiceImp;

    public HotelController(HotelServiceImp hotelServiceImp) {
        this.hotelServiceImp = hotelServiceImp;
    }
}
