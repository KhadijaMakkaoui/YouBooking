package com.example.backend.controller;
import com.example.backend.entity.Hotel;
import com.example.backend.service.Implementation.HotelServiceImp;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/hotels")
public class HotelController {
    HotelServiceImp hotelServiceImp;
    public HotelController(HotelServiceImp hotelServiceImp) {
        this.hotelServiceImp = hotelServiceImp;
    }
    @GetMapping
    public List<Hotel> getAllHotels(){
        return hotelServiceImp.getAllHotels();
    }
    @PostMapping
    public Hotel saveHotel(@Validated @RequestBody Hotel hotel){
        return hotelServiceImp.saveHotel(hotel);
    }
    @GetMapping("/approved/{approved}")
    public List<Hotel> getHotelsByApproved(@Validated @PathVariable("approved") boolean approved){
        return hotelServiceImp.getHotelsByApproved(approved);
    }
}